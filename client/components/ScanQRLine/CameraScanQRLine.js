import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
    StyleSheet,
    Text,
    Image,
    SafeAreaView,
    ScrollView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import {uploadOCR} from "../../util/ocr";
import PrimaryButton from "../UI/PrimaryButton";
import Card from "../UI/Card";

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
        const fileName = file.uri.split('/').pop();
        const headers =  {  'Content-Type': 'multipart/form-data', };
        let formData = new FormData();
        formData.append("image", {
            uri: file.uri,
            type: file.mimeType,
            name: fileName,
        })

        return uploadOCR(formData, headers).then((response) => {
            const text = response?.data ? response.data.join("\n") : "";
            setExtractedText(text);
        }).catch(err => {
            return false;
        })
    };

    return (
        <SafeAreaView>
            <ScrollView>
                <Card
                    style={styles.card}
                >
                    <PrimaryButton
                        style={styles.buttonPrimary}
                        onPress={pickImageGallery}
                    >
                        Chọn hình ảnh từ thư viện ảnh
                    </PrimaryButton>
                    <PrimaryButton
                        style={styles.buttonPrimary}
                        onPress={pickImageCamera}
                    >
                        Chọn hình ảnh từ camera
                    </PrimaryButton>
                    {image && (
                        <Image
                            source={{ uri: image }}
                            style={{
                                marginTop: 10,
                                width: 400,
                                height: 300,
                                objectFit: "contain",
                            }}
                        />
                    )}
                </Card>

                <Card>
                    <Text style={styles.text1}>
                        Extracted text:
                    </Text>
                    <Text style={styles.text1}>
                        {extractedText}
                    </Text>
                </Card>
            </ScrollView>

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
            padding: 10,
            elevation: 2,
        }
    },
    card: {
        width: "100%"
    }
});
