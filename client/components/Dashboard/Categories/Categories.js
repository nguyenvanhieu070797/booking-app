import {View, Text, StyleSheet} from "react-native"
import Card from "../../UI/Card";
import Colors from "../../../constants/colors";
import IconButtonCell from "../../UI/IconButtonCell";

function Categories() {
    function buttonCellHandler() {

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
                    icon="inventory"
                    iconBackground="transparent"
                    color={Colors.pink500}
                    size={24}
                    onPress={buttonCellHandler}
                    type="MaterialIcons"
                >
                    Kiểm kê
                </IconButtonCell>
            </View>
            <View style={styles.buttonContainer}>
                <IconButtonCell
                    icon="category"
                    iconBackground="transparent"
                    color={Colors.green500}
                    size={24}
                    onPress={buttonCellHandler}
                    type="MaterialIcons"
                >
                   Danh mục
                </IconButtonCell>
            </View>
            <View style={styles.buttonContainer}>
                <IconButtonCell
                    icon="product-hunt"
                    iconBackground="transparent"
                    color={Colors.lightBlue600}
                    size={24}
                    onPress={buttonCellHandler}
                    type="FontAwesome"
                >
                    Sản phẩm
                </IconButtonCell>
            </View>
            <View style={styles.buttonContainer}>
                <IconButtonCell
                    icon="team"
                    iconBackground="transparent"
                    color={Colors.purple500}
                    size={24}
                    onPress={buttonCellHandler}
                    type="AntDesign"
                >
                    Thành viên
                </IconButtonCell>
            </View>
            <View style={styles.buttonContainer}>
                <IconButtonCell
                    icon="rule"
                    iconBackground="transparent"
                    color={Colors.lightBlue600}
                    size={24}
                    onPress={buttonCellHandler}
                    type="MaterialIcons"
                >
                    Quy định SKU
                </IconButtonCell>
            </View>
            <View style={styles.buttonContainer}>
                <IconButtonCell
                    icon="devices"
                    iconBackground="transparent"
                    color={Colors.red500}
                    size={24}
                    onPress={buttonCellHandler}
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
        fontFamily: 'open-sans-bold',
    },
    categoriesContainer: {
        flex: 1,
        flexDirection:'row',
        gap: '1rem',
        flexWrap: "wrap",
    },
    buttonContainer: {
        width: "24%",
        marginTop: 5,
        alignItems: "center",
    }
});
