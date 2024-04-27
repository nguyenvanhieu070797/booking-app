import {StyleSheet, View, Image} from "react-native"
import Card from "../UI/Card";
import ImagePicker from "../UI/ImagePicker";
import {useState} from "react";

function SideMenu() {

    const [selectedImage, setSelectedImage] = useState("");

    function takeImageHandler(imageUri) {
        console.log({imageUri});
        setSelectedImage(imageUri);
    }

    console.log({selectedImage});

    return (
        <Card style={styles.card}>
            <View style={styles.imageDeviceContainer}>
                {
                    selectedImage ?  <Image
                        source={{uri: selectedImage}}
                        style={styles.imageDevice}
                    /> :  <Image
                        source={
                            require("../../assets/icon.png")
                        }
                        style={styles.imageDevice}
                    />
                }
            </View>
            <View style={styles.buttonUpdateContainer}>
                <ImagePicker
                    title={"Cập nhập hình"}
                    style={styles.buttonImage}
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
        marginTop: 55,
        flexDirection: "row",
        width: "100%",
    },
    buttonImage: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    }
})
