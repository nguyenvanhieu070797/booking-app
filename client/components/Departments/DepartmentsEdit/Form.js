import React, { useState } from 'react';
import {View, Pressable, StyleSheet, Image, Alert} from 'react-native';
import Colors from "../../../constants/colors";
import Card from "../../UI/Card";
import InputCustomLabel from "../../UI/InputCustomLabel";
import PrimaryButton from "../../UI/PrimaryButton";
import DangerButton from "../../UI/DangerButton";
import TakeImageModal from "./Modal/TakeImageModal";

function Form({onUpdateData, onDeleteData, data}) {
    const [state, setState] = useState({
        formData: data,
        modalVisible: false,
        imageUri: data?.image || "",
    });
    const {modalVisible, imageUri} = state;
    const {user_name: userName, password, email, description} = state.formData;
    const {userNameIsInvalid, passwordIsInvalid, emailIsInvalid} = checkErrorInputHandler(state.formData);
    const isValidForm = userNameIsInvalid || passwordIsInvalid || emailIsInvalid;

    /**
     * Show modal image
     */
    function takeImageHandler() {
        setState({...state, modalVisible: !state["modalVisible"]});
    }

    /**
     *
     * @param inputType
     * @param enteredValue
     */
    function updateInputValueHandler(inputType, enteredValue) {
        setState(currentState => {
            switch (inputType) {
                case 'userName':
                    currentState["formData"]["user_name"] = enteredValue;
                    break;
                case 'password':
                    currentState["formData"]["password"] = enteredValue;
                    break;
                case 'email':
                    currentState["formData"]["email"] = enteredValue;
                    break;
                case 'image':
                    currentState["formData"]["image"] = enteredValue;
                    currentState["imageUri"] = enteredValue?.uri || "";
                    currentState["modalVisible"] = false;
                    break;
                case 'description':
                    currentState["formData"]["description"] = enteredValue;
                    break;
            }
            return {...currentState}
        })
    }

    /**
     *
     * @param data
     * @returns {{passwordIsInvalid: boolean, userNameIsInvalid: boolean, emailIsInvalid: boolean}}
     */
    function checkErrorInputHandler(data) {
        let {user_name: userName, password, email} = data;
        let inValid = {
            userNameIsInvalid: false,
            passwordIsInvalid: false,
            emailIsInvalid: false,
        };
        userName = userName.trim();
        password = password.trim();
        email = email.trim();

        const userNameIsValid = userName.length > 0;
        const passwordIsValid = password.length > 6;
        const emailIsIsValid = email.length > 0;

        if (
            !userNameIsValid ||
            !passwordIsValid ||
            !emailIsIsValid
        ) {
            inValid = {
                userNameIsInvalid: !userNameIsValid,
                passwordIsInvalid: !passwordIsValid,
                emailIsInvalid: !emailIsIsValid,
            }
        }
        return inValid;
    }

    /**
     * Handle update data
     */
    function updateDataHandler() {
        if (isValidForm) {
            Alert.alert("Giá trị nhập không hợp lệ");
        } else {
            onUpdateData(state.formData);
        }
    }

    /**
     * Handler delete data
     */
    function deleteDataHandler() {
        Alert.alert(
            "Xóa",
            "Bạn có chắc muốn xóa?",
            [
                {
                    text: 'Đồng ý',
                    style: 'destructive',
                    onPress: () => onDeleteData()
                },
                {
                    text: 'Hủy',
                    style: 'cancel'
                }
            ]
        );
    }

    return (
        <View style={styles.rootContainer}>
            <Card style={styles.card}>
                <View style={styles.imageDeviceContainer}>
                    <Pressable onPress={takeImageHandler}>
                        {
                            imageUri ? <Image
                                source={{uri: imageUri}}
                                style={styles.imageDevice}
                            /> : <Image
                                source={
                                    require("../../../assets/icon.png")
                                }
                                style={styles.imageDevice}
                            />
                        }
                    </Pressable>
                </View>
                <View style={[styles.container, styles.containerTop]}>
                    <View style={styles.containerRight}>
                        <InputCustomLabel
                            label="Nhap ten"
                            value={userName}
                            isInvalid={userNameIsInvalid}
                            name="userName"
                            onChange={updateInputValueHandler}
                        />
                    </View>
                </View>

                <View style={styles.container}>
                    <View style={styles.containerRight}>
                        <InputCustomLabel
                            label="Email"
                            value={email}
                            isInvalid={emailIsInvalid}
                            name="email"
                            onChange={updateInputValueHandler}
                        />
                    </View>
                </View>

                <View style={styles.container}>
                    <View style={styles.containerRight}>
                        <InputCustomLabel
                            label="Nhap mat khau"
                            value={password}
                            isInvalid={passwordIsInvalid}
                            name="password"
                            secureTextEntry={true}
                            onChange={updateInputValueHandler}
                        />
                    </View>
                </View>

                <View style={styles.container}>
                    <View style={styles.containerRight}>
                        <InputCustomLabel
                            label="Mo ta"
                            value={description}
                            name="description"
                            onChange={updateInputValueHandler}
                        />
                    </View>
                </View>
            </Card>

            <View style={styles.containerAction}>
                <PrimaryButton
                    style={styles.buttonPrimary}
                    disabled={isValidForm}
                    onPress={updateDataHandler}>
                    Cập nhập
                </PrimaryButton>

                <DangerButton
                    style={styles.buttonDanger}
                    disabled={isValidForm}
                    onPress={deleteDataHandler}>
                    Xóa
                </DangerButton>
            </View>

            <TakeImageModal show={modalVisible} onClose={takeImageHandler} onPress={updateInputValueHandler} />
        </View>
    );
}

export default Form;


const styles = StyleSheet.create({
    card: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        position: "relative",
        marginTop: 65,
    },
    line: {
        marginVertical: 8,
        width: "100%",
        borderBottomColor: Colors.greyOpacity25,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    container: {
        marginBottom: 10,
        flexDirection: "row",
    },
    containerTop: {
        marginTop: 40,
    },
    containerLeft: {
        flex: 0.5,
    },
    containerRight: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'flex-end',
        width: "100%",
    },
    textLeft: {
        fontSize: 16,
        fontFamily: 'open-sans-bold',
        color: Colors.greyOpacity75,
    },
    textRight: {
        fontSize: 16,
        fontFamily: 'open-sans-bold',
        color: Colors.greyOpacity50,
    },
    title: {
        paddingHorizontal: 16,
        paddingVertical: 5,
        fontSize: 20,
        color: Colors.darkPrimary,
        fontFamily: 'open-sans-bold',
    },
    inputStyle: {
        width: "100%",
        height: 49,
        backgroundColor: "blue",
    },

    // Image
    imageDeviceContainer: {
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        width: "100%",
    },
    imageDevice: {
        width: 100,
        height: 100,
        borderRadius: 100,
        borderWidth: 5,
        borderColor: Colors.grey50,
        bottom: 50,
        left: 16,
        zIndex: 3,
    },

    // Action
    containerAction: {
        flexDirection: "row",
        flex: 1,
    },
    // Button Edit
    buttonPrimary: {
        container: {
            flex: 1,
            marginTop: 10,
            marginHorizontal: 12,
            borderRadius: 5,
            justifyContent: "center",
        },
        text: {
            fontFamily: 'open-sans-bold',
        },
        pressed: {
            paddingVertical: 10,
            elevation: 2,
        }
    },

    // Button Delete
    buttonDanger: {
        container: {
            flex: 1,
            marginTop: 10,
            marginHorizontal: 12,
            borderRadius: 5,
            justifyContent: "center",
        },
        text: {
            fontFamily: 'open-sans-bold',
        },
        pressed: {
            paddingVertical: 10,
            elevation: 2,
        }
    },
});