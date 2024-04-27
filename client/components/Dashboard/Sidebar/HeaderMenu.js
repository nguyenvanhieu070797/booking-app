import {ScrollView, View, StyleSheet} from 'react-native';
import Card from "../../UI/Card";
import IconButtonCell from "../../UI/IconButtonCell";
import Colors from "../../../constants/colors";
import {useNavigation} from "@react-navigation/native";

export default function HeaderMenu() {
    const navigation = useNavigation();

    function buttonCellHandler(action) {
        switch (action) {
            case "devices":
                navigation.navigate("DevicesScreen");
                break;
            case "members":
                navigation.navigate("MembersScreen");
                break;
            case "qrcode-scan":
                navigation.navigate("ScanQR");
                break;
            case "line-scan":
                navigation.navigate("ScanQRLine");
                break;
        }
    }

    return (
        <Card>
            <View
                style={styles.rootContainer}
            >
                <View style={styles.container}>
                    <View style={styles.buttonContainer}>
                        <IconButtonCell
                            icon="devices"
                            iconBackground={Colors.lightBlue500}
                            color={Colors.lightBlue50}
                            size={24}
                            onPress={() => buttonCellHandler("devices")}
                            type="MaterialIcons"
                        >
                            Thiết bị
                        </IconButtonCell>
                    </View>
                    <View style={styles.buttonContainer}>
                        <IconButtonCell
                            icon="team"
                            iconBackground={Colors.lightBlue500}
                            color={Colors.lightBlue50}
                            size={24}
                            onPress={() => buttonCellHandler("members")}
                            type="AntDesign"
                        >
                            Thành viên
                        </IconButtonCell>
                    </View>
                    <View style={styles.buttonContainer}>
                        <IconButtonCell
                            icon="qrcode-scan"
                            iconBackground={Colors.lightBlue500}
                            color={Colors.lightBlue50}
                            size={24}
                            onPress={() => buttonCellHandler("qrcode-scan")}
                            type="MaterialCommunityIcons"
                        >
                            Quét QR
                        </IconButtonCell>
                    </View>
                    <View style={styles.buttonContainer}>
                        <IconButtonCell
                            icon="line-scan"
                            iconBackground={Colors.lightBlue500}
                            color={Colors.lightBlue50}
                            size={24}
                            onPress={() => buttonCellHandler("line-scan")}
                            type="MaterialCommunityIcons"
                        >
                            Quét mã
                        </IconButtonCell>
                    </View>
                </View>
            </View>
        </Card>
    );
}

const styles = StyleSheet.create(
    {
        rootContainer: {},
        container: {
            flexDirection: 'row',
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
        },
        buttonContainer: {
            marginHorizontal: 20,
        }
    }
);

