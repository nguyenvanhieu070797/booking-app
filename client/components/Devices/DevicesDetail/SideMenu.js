import {StyleSheet, View, Image} from "react-native"
import Card from "../../UI/Card";
import Colors from "../../../constants/colors";
import PrimaryButton from "../../UI/PrimaryButton";
import {useNavigation} from "@react-navigation/native";

function SideMenu() {
    const navigation = useNavigation();

    function updatePictureHandler() {
        navigation.navigate("DevicesEditScreen");
    }

    return (
        <Card style={styles.card}>
            <View style={styles.imageDeviceContainer}>
                <Image
                    source={
                        require("../../../assets/icon.png")
                    }
                    style={styles.imageDevice}
                />
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
})
