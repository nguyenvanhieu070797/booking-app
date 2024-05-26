import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
    View,
    Button,
    StyleSheet,
    Text,
    Image,
    SafeAreaView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function CameraScanQRLine() {
    const [image, setImage] = useState(null);
    const [extractedText, setExtractedText] =
        useState("");

    const pickImageGallery = async () => {
        let result =
            await ImagePicker.launchImageLibraryAsync({
                mediaTypes:
                ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                base64: true,
                allowsMultipleSelection: false,
            });
        if (!result.canceled) {
            performOCR(result.assets[0]);
            setImage(result.assets[0].uri);
        }
    };

    const pickImageCamera = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            base64: true,
            allowsMultipleSelection: false,
        });
        if (!result.canceled) {

            // Perform OCR on the captured image
            // Set the captured image in state
            performOCR(result.assets[0]);
            setImage(result.assets[0].uri);
        }
    };

    const performOCR = (file) => {
        let myHeaders = new Headers();
        // myHeaders.append(
        //     "apikey",
        //
        //     // ADDD YOUR API KEY HERE
        //     "FEmvQr5uj99ZUvk3essuYb6P5lLLBS20"
        // );

        myHeaders.append(
            "Content-Type",
            "multipart/form-data"
        );

        // let raw = file;
        let requestOptions = {
            method: "get",
            headers: myHeaders,
            // body: raw,
        };

        // Send a POST request to the OCR API
        fetch(
            "http://192.168.2.14:3005/admin/img-upload",
            requestOptions
        )
            .then((response) => response.json())
            .then((result) => {
                setExtractedText(result["data"]);
            })
            .catch((error) => console.log("error", error));
    };

    return (
        <SafeAreaView style={styles.container}>
            <Button
                title="Pick an image from gallery"
                onPress={pickImageGallery}
            />
            <Button
                title="Pick an image from camera"
                onPress={pickImageCamera}
            />
            {image && (
                <Image
                    source={{ uri: image }}
                    style={{
                        width: 400,
                        height: 300,
                        objectFit: "contain",
                    }}
                />
            )}
            <View>
                <Text style={styles.text1}>
                    Extracted text:
                </Text>
                <Text style={styles.text1}>
                    {extractedText}
                </Text>
            </View>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ccc",
        height: "100%",
    },
    heading: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 10,
        color: "green",
        textAlign: "center",
    },
    heading2: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 10,
        color: "black",
        textAlign: "center",
    },
    text1: {
        fontSize: 16,
        marginBottom: 10,
        color: "black",
        fontWeight: "bold",
    },
});
