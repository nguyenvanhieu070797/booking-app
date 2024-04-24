import {View, StyleSheet, Pressable} from "react-native";
import Colors from "../../constants/colors";
import Icons from "../UI/Icons";
import {useNavigation} from "@react-navigation/native";
import IconButton from "../UI/IconButton";

function Header() {
    const navigation = useNavigation();

    function backScreenHandler() {
        navigation.navigate("MainScreen");
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
            <View style={styles.containerRight}>
                <Pressable
                    style={
                        ({pressed}) => [styles.search, pressed && styles.pressed]
                    }
                    onPress={backScreenHandler}>
                    <Icons style={32} icon="home" color={Colors.darkSecondary}/>
                </Pressable>
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
        flex: 1,
        justifyContent: "flex-start",
        alignItems:  "flex-start",
        paddingLeft: 10,
    },
    back: {
        flex: 1,
        backgroundColor: Colors.greyOpacity25,
        width: 40,
        borderRadius: "50%",
    },
    containerRight: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "flex-end",
        paddingRight: 10,

    },
    search: {
        padding: 15,
        borderRadius: 20,
        backgroundColor: Colors.green500,
    },

    icon: {
        borderRadius: "50%",
        padding: 10,
        marginHorizontal: 0,
        marginVertical: 0,
        backgroundColor: Colors.greyOpacity25,
    }
});
