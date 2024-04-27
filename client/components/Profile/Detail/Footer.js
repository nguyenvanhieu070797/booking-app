import {View, StyleSheet} from "react-native"
import SecondaryButton from "../../UI/SecondaryButton";
import {removeToken} from "../../../store/redux/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useDispatch} from "react-redux";

function Footer() {
    const dispatch = new useDispatch();

    function logoutHandler() {
        dispatch(removeToken());
        AsyncStorage.removeItem("token");
    }

    return <View style={styles.container}>
        <SecondaryButton style={styles.buttonPrimary} onPress={logoutHandler}>
            Đăng xuất
        </SecondaryButton>
    </View>
}

export default Footer;

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingHorizontal: 15,
    },
    buttonPrimary: {
        container: {
            borderRadius: 5,
            flex: 1,
            marginRight: 2,
        },
        text: {
            fontFamily: 'open-sans-bold',
        },
        pressed: {
            paddingVertical: 10,
            elevation: 2,
        }
    },
})
