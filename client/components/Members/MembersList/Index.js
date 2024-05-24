import {useEffect, useState} from "react";
import {View, StyleSheet, Alert} from "react-native";
import SidebarMenu from "./SidebarMenu";
import Header from "./Header";
import ListItem from "./ListItem/Index";
import Colors from "../../../constants/colors";

// Get list user
import {getUsers} from "../../../util/users";
import {login} from "../../../util/auth";
import {setToken} from "../../../store/redux/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ButtonDropdown from "./ListItem/ButtonDropdown";

function MembersList() {
    const [idDepartment, setIdDepartment] = useState(null);
    const [isFetchUser, setIsFetchUser] = useState(true);
    const [users, setUsers] = useState([]);

    function categoriesActiveHandler(item) {
        setIdDepartment(item.id);
        setIsFetchUser(true);
    }

    useEffect(() => {
        if(isFetchUser) {
            getUsers().then(result => {
                console.log(result.data);
                setUsers(result.data)
            });
            setIsFetchUser(false)
        }
    }, [isFetchUser])

    return (
        <View style={styles.rootContainer}>
            <ButtonDropdown/>
            <View style={styles.header}>
                <Header/>
                <SidebarMenu onPress={categoriesActiveHandler} idActive={idDepartment}/>
            </View>
            <ListItem data={users}/>
        </View>
    )
}

export default MembersList;

const styles = StyleSheet.create({
    rootContainer: {
        flexDirection: "column",
        flex: 1,
        position: "relative"
    },
    header: {
        backgroundColor: Colors.blue400,
        paddingTop: 42,
        position: "relative"
    }
});
