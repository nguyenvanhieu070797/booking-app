import { useState } from "react";
import {View, StyleSheet} from "react-native";
import Colors from "../../constants/colors";
import {useNavigation} from "@react-navigation/native";
import IconButton from "../UI/IconButton";
import InputSearch from "../UI/InputSearch";

function Header() {
    const [search, setSearch] = useState("");
    const navigation = useNavigation();

    function backScreenHandler() {
        navigation.navigate("MainScreen");
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
            <View style={styles.containerRight}>
                <InputSearch
                    placeholder="Tìm kiếm"
                    onUpdateValue={updateInputValueHandler.bind(this)}
                    value={search}
                    style={{
                        container: {
                            marginVertical: 0,
                            width: "100%",
                        },
                        input: {
                            paddingHorizontal: 15,
                            height: 44,
                        },
                        icon: {
                            color: Colors.grey300,
                        }
                    }}
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
        flex: 0.15,
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
        borderRadius: 100,
        padding: 10,
        marginHorizontal: 0,
        marginVertical: 0,
        backgroundColor: Colors.greyOpacity25,
    }
});
