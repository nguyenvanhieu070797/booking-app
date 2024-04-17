import {View, Text, StyleSheet} from "react-native"
import Card from "../../UI/Card";
import Colors from "../../../constants/colors";
import IconButtonCell from "../IconButtonCell";

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
                    icon="home"
                    iconBackground={Colors.red200}
                    color={Colors.red500}
                    size={24}
                    onPress={buttonCellHandler}
                >
                    Kiểm kê
                </IconButtonCell>
            </View>
            <View style={styles.buttonContainer}>
                <IconButtonCell
                    icon="home"
                    iconBackground={Colors.red200}
                    color={Colors.red500}
                    size={24}
                    onPress={buttonCellHandler}
                >
                   Danh mục
                </IconButtonCell>
            </View>
            <View style={styles.buttonContainer}>
                <IconButtonCell
                    icon="home"
                    iconBackground={Colors.red200}
                    color={Colors.red500}
                    size={24}
                    onPress={buttonCellHandler}
                >
                    Sản phẩm
                </IconButtonCell>
            </View>
            <View style={styles.buttonContainer}>
                <IconButtonCell
                    icon="home"
                    iconBackground={Colors.red200}
                    color={Colors.red500}
                    size={24}
                    onPress={buttonCellHandler}
                >
                    Thành viên
                </IconButtonCell>
            </View>
            <View style={styles.buttonContainer}>
                <IconButtonCell
                    icon="home"
                    iconBackground={Colors.red200}
                    color={Colors.red500}
                    size={24}
                    onPress={buttonCellHandler}
                >
                    Quy định SKU
                </IconButtonCell>
            </View>
            <View style={styles.buttonContainer}>
                <IconButtonCell
                    icon="home"
                    iconBackground={Colors.red200}
                    color={Colors.red500}
                    size={24}
                    onPress={buttonCellHandler}
                >
                    Sử dụng
                </IconButtonCell>
            </View>
            <View style={styles.buttonContainer}>
                <IconButtonCell
                    icon="home"
                    iconBackground={Colors.red200}
                    color={Colors.red500}
                    size={24}
                    onPress={buttonCellHandler}
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
