import React, {useState,} from 'react';
import {View, Pressable, StyleSheet, Image, Modal, Alert} from 'react-native';
import Colors from "../../../constants/colors";
import Card from "../../UI/Card";
import InputCustomLabel from "../../UI/InputCustomLabel";
import ImageChoose from "../../UI/ImageChoose";
import ImagePicker from "../../UI/ImagePicker";
import SecondaryButton from "../../UI/SecondaryButton";
import PrimaryButton from "../../UI/PrimaryButton";
import {useNavigation} from "@react-navigation/native";

const formData = {
    category_name: "",
    description: "",
    image: "",
};

function Form({onSubmit}) {
    const navigation = useNavigation();
    const [state, setState] = useState({
        formData: JSON.parse(JSON.stringify(formData)),
        modalVisible: false,
        isChanged: [],
    });
    const {modalVisible, isChanged} = state;
    const {category_name: categoryName, description, image} = state.formData;
    const {categoryNameIsInvalid} = checkErrorInputHandler(state.formData);
    const isValidForm = categoryNameIsInvalid;

    /**
     * Show modal image
     */
    function chooseImageHandler() {
        setState({...state, modalVisible: !state["modalVisible"]});
    }

    /**
     *
     */
    function goBackHandler() {
        navigation.goBack();
    }

    /**
     *
     * @param inputType
     * @param enteredValue
     */
    function updateInputValueHandler(inputType, enteredValue) {
        setState(currentState => {
            switch (inputType) {
                case 'categoryName':
                    currentState["formData"]["category_name"] = enteredValue;
                    break;
                case 'image':
                    const fileName = enteredValue.uri.split('/').pop();
                    currentState["formData"]["image"] = {
                        uri: enteredValue.uri,
                        type: enteredValue.mimeType,
                        name: fileName,
                    };
                    currentState["modalVisible"] = false;
                    break;
                case 'description':
                    currentState["formData"]["description"] = enteredValue;
                    break;
            }
            if (!currentState["isChanged"].includes(inputType)) {
                currentState["isChanged"].push(inputType);
            }
            return {...currentState}
        })
    }

    /**
     *
     * @param data
     * @returns {{passwordIsInvalid: boolean, categoryNameIsInvalid: boolean}}
     */
    function checkErrorInputHandler(data) {
        let {category_name: categoryName} = data;
        let inValid = {
            categoryNameIsInvalid: false,
        };

        categoryName = categoryName.trim();

        const categoryNameIsValid = categoryName.length > 0;

        if (
            !categoryNameIsValid
        ) {
            inValid = {
                categoryNameIsInvalid: !categoryNameIsValid,
            }
        }
        return inValid;
    }

    /**
     * Handle submit data
     */
    function submitDataHandler() {
        if (isValidForm) {
            Alert.alert("Giá trị nhập không hợp lệ");
        } else {
            onSubmit(state.formData).then(result => {
                if (result) {
                    Alert.alert(
                        "Thành công",
                        "Đăng ký thành công",
                        [{text: 'Đồng ý', style: 'destructive', onPress: goBackHandler }]
                    )
                } else {
                    Alert.alert("Đăng ký thất bại");
                }
            });
        }
    }

    return (
        <View style={styles.rootContainer}>
            <Card style={styles.card}>
                <View style={styles.imageDeviceContainer}>
                    <Pressable onPress={chooseImageHandler}>
                        {
                            image ? <Image
                                source={{uri: image.uri}}
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
                            value={categoryName}
                            isInvalid={isChanged.includes("categoryName") && categoryNameIsInvalid}
                            name="categoryName"
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

            <PrimaryButton
                style={styles.buttonPrimary}
                disabled={isValidForm}
                onPress={submitDataHandler}>
                Thêm
            </PrimaryButton>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => chooseImageHandler()}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <ImageChoose
                            title={"Chọn hình ảnh"}
                            style={styles.buttonChooseImage}
                            onTakenImage={updateInputValueHandler.bind(this, "image")}/>
                        <ImagePicker
                            title={"Chụp hình"}
                            style={styles.buttonChooseImage}
                            onTakenImage={updateInputValueHandler.bind(this, "image")}/>
                        <SecondaryButton style={styles.buttonCancelChooseImage} onPress={chooseImageHandler}>
                            Hủy
                        </SecondaryButton>
                    </View>
                </View>
            </Modal>
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
        fontFamily: 'font-bold',
        color: Colors.greyOpacity75,
    },
    textRight: {
        fontSize: 16,
        fontFamily: 'font-bold',
        color: Colors.greyOpacity50,
    },
    title: {
        paddingHorizontal: 16,
        paddingVertical: 5,
        fontSize: 20,
        color: Colors.darkPrimary,
        fontFamily: 'font-bold',
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

    // Modal
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        width: "80%",
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 5,
        paddingVertical: 20,
        alignItems: 'center',
        shadowColor: Colors.grey500,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 5,
    },

    // Select Image
    buttonChooseImage: {
        container: {
            borderRadius: 5,
            width: "90%",
            marginVertical: 5,
        },
        text: {
            fontFamily: 'font-bold',
        },
        pressed: {
            paddingVertical: 10,
            elevation: 2,
        }
    },

    buttonCancelChooseImage: {
        container: {
            borderRadius: 5,
            width: "90%",
            marginVertical: 5,
        },
        text: {
            fontFamily: 'font-bold',
        },
        pressed: {
            paddingVertical: 10,
            elevation: 2,
        }
    },

    // Button Submit
    buttonPrimary: {
        container: {
            marginTop: 10,
            marginHorizontal: 12,
            borderRadius: 5,
            justifyContent: "center",
        },
        text: {
            fontFamily: 'font-bold',
        },
        pressed: {
            paddingVertical: 10,
            elevation: 2,
        }
    },
});
