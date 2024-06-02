import {View, StyleSheet} from "react-native";
import Colors from "../../../constants/colors";
import {useNavigation} from "@react-navigation/native";
import IconButton from "../../UI/IconButton";

function Header() {
    const navigation = useNavigation();

    function backScreenHandler() {
        navigation.goBack();
    }

    return (
        <View style={[styles.rootContainer]}>
            <View style={styles.containerLeft}>
                <IconButton
                    icon="chevron-back-outline"
                    color={Colors.white}
                    size={24}
                    style={styles.icon}
                    onPress={backScreenHandler}
                />
            </View>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    rootContainer: {
        flexDirection: "row",
        marginBottom: 10,
    },
    containerLeft: {
        flex: 0.13,
        justifyContent: "flex-start",
        alignItems:  "flex-start",
        paddingLeft: 10,
        width: 50,
    },
    back: {
        flex: 1,
        backgroundColor: Colors.greyOpacity25,
        width: 40,
        borderRadius: 100,
    },
    icon: {
        borderRadius: 100,
        padding: 5,
        marginHorizontal: 0,
        marginVertical: 0,
        backgroundColor: Colors.greyOpacity25,
    },
});
