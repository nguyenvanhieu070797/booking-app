import {View, SafeAreaView, StyleSheet, Pressable, Dimensions} from "react-native";
import Colors from "../../constants/colors";
import Icons from "../UI/Icons";

function Header() {
    function backScreenHandler() {
        console.log("123");
    }
    const screenWidth = Dimensions.get('window').width;

    return (
        <SafeAreaView style={[styles.rootContainer, {width: screenWidth}]}>
            <Pressable
                style={
                    ({pressed}) => [styles.back, pressed && styles.pressed]
                }
                onPress={backScreenHandler}>
                <Icons style={32} icon="home" color={Colors.darkSecondary}/>
            </Pressable>
            <Pressable
                style={
                    ({pressed}) => [styles.search, pressed && styles.pressed]
                }
                onPress={backScreenHandler}>
                <Icons style={32} icon="home" color={Colors.darkSecondary}/>
            </Pressable>
        </SafeAreaView>
    )
}

export default Header;

const styles = StyleSheet.create({
    rootContainer: {
        backgroundColor: Colors.grey50,
        flexDirection: "row",
        justifyContent:'stretch',
    },
    back: {
        justifyContent: "flex-start",
        padding: 15,
        backgroundColor: Colors.green500,
        borderRadius: 20,
        marginLeft: 10,
    },
    search: {
        flex: 2,
        padding: 15,
        textAlign: "right"
    },
});
