import { useState } from "react";
import {Text, View, StyleSheet} from "react-native";
import Colors from "../../../constants/colors";
import {useNavigation} from "@react-navigation/native";
import IconButton from "../../UI/IconButton";
import InputSearch from "../../UI/InputSearch";

function Header({onShowDropdownMenu}) {
    const [search, setSearch] = useState("");
    const navigation = useNavigation();

    function backScreenHandler() {
        navigation.goBack();
    }

    function updateInputValueHandler(enteredValue) {
        setSearch(enteredValue);
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
            <View style={styles.containerSearch}>
                <InputSearch
                    placeholder="Tìm kiếm"
                    onUpdateValue={updateInputValueHandler.bind(this)}
                    value={search}
                    style={styles.inSearch}
                />

            </View>
            <View style={styles.containerDropdownMenu}>
                <IconButton
                    mode="Entypo"
                    icon="dots-three-horizontal"
                    color={Colors.greyOpacity75}
                    size={24}
                    style={styles.iconDropdown}
                    onPress={() => onShowDropdownMenu()}
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
    containerSearch: {
        flex: 1,
        paddingRight: 6,
    },
    search: {
        padding: 15,
        borderRadius: 20,
        backgroundColor: Colors.green500,
    },
    inSearch: {
        container: {
            marginVertical: 0,
            width: "100%",
        },
        input: {
            paddingHorizontal: 15,
            height: 34,
        },
        icon: {
            color: Colors.grey300,
            size: 24,
        },
        iconContainer: {
            marginTop: 5,
        }
    },
    icon: {
        borderRadius: 100,
        padding: 5,
        marginHorizontal: 0,
        marginVertical: 0,
        backgroundColor: Colors.greyOpacity25,
    },
    containerDropdownMenu: {
        justifyContent: "flex-end",
        alignItems: "flex-end",
        paddingRight: 10,
    },
    iconDropdown: {
        borderRadius: 100,
        padding: 5,
        marginHorizontal: 0,
        marginVertical: 0,
        backgroundColor: Colors.white,
    },
});
