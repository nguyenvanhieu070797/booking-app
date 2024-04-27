import {StyleSheet, View, Text, Image} from "react-native"
import Card from "../UI/Card";
import Colors from "../../constants/colors";
import PrimaryButton from "../UI/PrimaryButton";

function DevicesSideMenu() {

    function updatePicture() {

    }

    return (
        <Card style={styles.card}>
            <View style={styles.imageDeviceContainer}>
                <Image
                    source={
                        require("../../assets/icon.png")
                    }
                    style={styles.imageDevice}
                />
            </View>
            <View style={styles.buttonUpdateContainer}>
                <PrimaryButton onPress={updatePicture} style={styles.buttonPrimaryLeft}>
                    Cap nhap hinh anh
                </PrimaryButton>
                <PrimaryButton onPress={updatePicture} style={styles.buttonPrimaryRight}>
                    Cap nhap hinh anh
                </PrimaryButton>
            </View>
        </Card>
    )
}

export default DevicesSideMenu;


const styles = StyleSheet.create({
    card: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        position: "relative",
        marginTop: 55,
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
    line: {
        marginVertical: 8,
        width: "100%",
        borderBottomColor: Colors.greyOpacity25,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    buttonUpdateContainer: {
        marginTop: 60,
        flexDirection: "row",
    },
    buttonPrimaryLeft: {
        container: {
            borderRadius: 5,
            flex: 1,
            marginRight: 2,
        }
    },
    buttonPrimaryRight: {
        container: {
            borderRadius: 5,
            flex: 1,
            marginLeft: 2,
        }
    }
})
