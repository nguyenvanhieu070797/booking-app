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
                {`样品管理`}
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
                    账号管理
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
                    账号管理
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
                    账号管理
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
                    账号管理
                </IconButtonCell>
            </View>
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
                    账号管理
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
                    账号管理
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
                    账号管理
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
                    账号管理
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
        flexDirection: 'row-reverse',
        alignItems: 'center',
        textAlign: "left"
    },
    buttonContainer: {
        flex: 1,
        marginTop: 5,
        alignItems: 'center',
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: 0,
    }
});
