import React, {useState,} from 'react';
import {View, Pressable, StyleSheet, Image, Modal, Alert} from 'react-native';
import Colors from "../../../constants/colors";
import {useNavigation} from '@react-navigation/native'
import Card from "../../UI/Card";
import InputCustomLabel from "../../UI/InputCustomLabel";
import ImageChoose from "../../UI/ImageChoose";
import ImagePicker from "../../UI/ImagePicker";

function Form({onSubmit, credentialsInvalid}) {
    const navigation = useNavigation();
    const [enteredUserName, setEnteredUserName] = useState('Nguyen Van Hieu');
    const [enteredPassword, setEnteredPassword] = useState('1111');
    const [enteredEmail, setEnteredEmail] = useState('n-hieu@cyllenge.com');
    const [enteredDescription, setEnteredDescription] = useState('n-hieu@cyllenge.com');
    const [selectedImage, setSelectedImage] = useState("");
    const [modalVisible, setModalVisible] = useState(false);

    const {
        userName: userNameIsInvalid,
        password: passwordIsInvalid,
        email: emailIsInvalid,
    } = credentialsInvalid;


    function takeImageHandler(imageUri) {
        setSelectedImage(imageUri);
    }

    function chooseImageHandler() {
        setModalVisible(!modalVisible)
    }

    function updateInputValueHandler(inputType, enteredValue) {
        switch (inputType) {
            case 'userName':
                setEnteredUserName(enteredValue);
                break;
            case 'password':
                setEnteredPassword(enteredValue);
                break;
            case 'email':
                setEnteredEmail(enteredValue);
                break;
            case 'description':
                setEnteredDescription(enteredValue);
                break;
        }
    }

    return (
        <View style={styles.rootContainer}>
            <Card style={styles.card}>
                <View style={styles.imageDeviceContainer}>
                    <Pressable onPress={chooseImageHandler}>
                        {
                            selectedImage ?  <Image
                                source={{uri: selectedImage}}
                                style={styles.imageDevice}
                            /> :  <Image
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
                            value={enteredUserName}
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
                            value={enteredEmail}
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
                            value={enteredPassword}
                            isInvalid={passwordIsInvalid}
                            name="password"
                            onChange={updateInputValueHandler}
                        />
                    </View>
                </View>

                <View style={styles.container}>
                    <View style={styles.containerRight}>
                        <InputCustomLabel
                            label="Mo ta"
                            value={enteredDescription}
                            name="description"
                            onChange={updateInputValueHandler}
                        />
                    </View>
                </View>

            </Card>


            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    console.log("!23");
                    Alert.alert('Modal has been closed.');
                    chooseImageHandler();
                }}
                >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <ImageChoose
                            title={"Chọn hình ảnh"}
                            style={styles.buttonPrimaryLeft}
                            onTakenImage={takeImageHandler}/>
                        <ImagePicker
                            title={"Chụp hình"}
                            style={styles.buttonChooseImage}
                            onTakenImage={takeImageHandler}/>
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

    // Modal
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        width: "80%",
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingVertical: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },

    // Select Image
    buttonChooseImage: {
        text: {
            fontFamily: 'open-sans-bold',
        },
        pressed: {
            paddingVertical: 10,
            elevation: 2,
        }
    },
});
