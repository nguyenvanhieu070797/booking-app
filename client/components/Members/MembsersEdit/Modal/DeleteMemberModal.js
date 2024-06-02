import {Modal, StyleSheet, View} from "react-native";
import ImageChoose from "../../../UI/ImageChoose";
import ImagePicker from "../../../UI/ImagePicker";
import SecondaryButton from "../../../UI/SecondaryButton";
import React from "react";
import Colors from "../../../../constants/colors";

function TakeImageModal ({show, onClose, onPress}) {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={show}
            onRequestClose={() => onClose()}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <ImageChoose
                        title={"Chọn hình ảnh"}
                        style={styles.buttonChooseImage}
                        onTakenImage={(data) => onPress("image", data)}/>
                    <ImagePicker
                        title={"Chụp hình"}
                        style={styles.buttonChooseImage}
                        onTakenImage={(data) => onPress("image", data)}/>
                    <SecondaryButton style={styles.buttonCancelChooseImage} onPress={onClose}>
                        Hủy
                    </SecondaryButton>
                </View>
            </View>
        </Modal>
    )
}

export default TakeImageModal;

const styles = StyleSheet.create({
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
            fontFamily: 'open-sans-bold',
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
            fontFamily: 'open-sans-bold',
        },
        pressed: {
            paddingVertical: 10,
            elevation: 2,
        }
    },

});
