import {StyleSheet, View, Image} from "react-native";
import {useState} from "react";
import Card from "../../UI/Card";
import ImagePicker from "../../UI/ImagePicker";
import ImageChoose from "../../UI/ImageChoose";

function SideMenu() {
    const [selectedImage, setSelectedImage] = useState("");

    function takeImageHandler(imageUri) {
        setSelectedImage(imageUri);
    }

    return (
        <Card style={styles.card}>
            <View style={styles.imageDeviceContainer}>
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
            </View>

            <View style={styles.buttonUpdateContainer}>
                <ImageChoose
                    title={"Chọn hình ảnh"}
                    style={styles.buttonPrimaryLeft}
                    onTakenImage={takeImageHandler}/>
                <ImagePicker
                    title={"Chụp hình"}
                    style={styles.buttonPrimaryRight}
                    onTakenImage={takeImageHandler}/>
            </View>
        </Card>
    )
}

export default SideMenu;


const styles = StyleSheet.create({
    card: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        position: "relative",
        marginTop: 65,
    },
    imageDeviceContainer: {
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        width: "100%",
    },
    imageDevice: {
        width: 120,
        height: 120,
        borderRadius: 100,
        bottom: 55,
        left: 16,
    },
    buttonUpdateContainer: {
        marginTop: 60,
        flexDirection: "row",
        width: "100%",
    },
    buttonImage: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    buttonPrimaryLeft: {
        container: {
            borderRadius: 5,
            flex: 1,
            marginRight: 2,
        },
        text: {
            fontFamily: 'open-sans-bold',
        },
        pressed: {
            paddingVertical: 10,
            elevation: 2,
        }
    },
    buttonPrimaryRight: {
        container: {
            borderRadius: 5,
            flex: 1,
            marginLeft: 2,
        },
        text: {
            fontFamily: 'open-sans-bold',
        },
        pressed: {
            paddingVertical: 10,
            elevation: 2,
        }
    }
})
