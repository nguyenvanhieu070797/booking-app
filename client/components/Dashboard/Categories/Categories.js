import {View, Text, StyleSheet} from "react-native"
import Card from "../../UI/Card";
import Colors from "../../../constants/colors";
import IconButtonCell from "../../UI/IconButtonCell";
import {useNavigation} from '@react-navigation/native'

function Categories() {
    const navigation = useNavigation();

    function buttonCellHandler(action = "") {
        switch (action) {
            case "Departments":
                navigation.navigate("DepartmentsScreen");
                break;
            case "Categories":
                navigation.navigate("CategoriesScreen");
                break;
            case "CategoriesDevices":
                navigation.navigate("CategoriesDevicesScreen");
                break;
            case "Devices":
                navigation.navigate("DevicesScreen");
                break;
        }
    }

    return <Card>
        <View style={styles.titleContainer}>
            <Text style={styles.textTitleContainer}>
                Thao tác khác
            </Text>
        </View>

        <View style={styles.categoriesContainer}>
            <View style={styles.buttonContainer}>
                <IconButtonCell
                    icon="team"
                    iconBackground="transparent"
                    color={Colors.purple500}
                    size={24}
                    onPress={() => buttonCellHandler("Departments")}
                    type="AntDesign"
                >
                    Phòng ban
                </IconButtonCell>
            </View>
            <View style={styles.buttonContainer}>
                <IconButtonCell
                    icon="category"
                    iconBackground="transparent"
                    color={Colors.green500}
                    size={24}
                    onPress={() => buttonCellHandler("CategoriesDevices")}
                    type="MaterialIcons"
                >
                    Danh mục
                </IconButtonCell>
            </View>
            <View style={styles.buttonContainer}>
                <IconButtonCell
                    icon="inventory"
                    iconBackground="transparent"
                    color={Colors.pink500}
                    size={24}
                    onPress={() => buttonCellHandler("Categories")}
                    type="MaterialIcons"
                >
                    Phân loại thiết bị
                </IconButtonCell>
            </View>
            <View style={styles.buttonContainer}>
                <IconButtonCell
                    icon="devices"
                    iconBackground="transparent"
                    color={Colors.red500}
                    size={24}
                    onPress={() => buttonCellHandler("Devices")}
                    type="MaterialCommunityIcons"
                >
                    Thiết bị
                </IconButtonCell>
            </View>
        </View>
    </Card>
}

export default Categories;

const styles = StyleSheet.create({
    titleContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        textAlign: "left"
    },
    textTitleContainer: {
        textAlign: "left",
        flex: 1,
        fontSize: 16,
        color: Colors.darkPrimary,
        fontFamily: 'open-sans-bold',
    },
    categoriesContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: "wrap",
    },
    buttonContainer: {
        width: "24%",
        marginTop: 5,
        alignItems: "center",
    }
});
