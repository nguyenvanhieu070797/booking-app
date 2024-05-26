import {useEffect, useState} from "react";
import {View, StyleSheet, Alert} from "react-native";
import SidebarMenu from "./SidebarMenu";
import Header from "./Header";
import ListItem from "./ListItem/Index";
import Colors from "../../../constants/colors";
import {useNavigation} from "@react-navigation/native";
import { useIsFocused } from '@react-navigation/core';

// Get list user
import {getUsers} from "../../../util/users";
import ViewDropdown from "./ViewDropdown";

const initState = {
    idDepartment: null,
    isFetchUsers: true,
    users: [],
    showDropdown: false,
}

function MembersList() {
    const showSidebar = false;
    const isFocused = useIsFocused();
    const navigation = useNavigation();
    const [state, setState] = useState(initState);
    const {showDropdown, users, isFetchUsers, idDepartment} = state;
    function categoriesActiveHandler(item) {
        setState(currentState => {
            return {...currentState, idDepartment: item.id, isFetchUsers: true};
        });
    }

    function onShowDropdownMenuHandler() {
        setState(currentState => {
            return {...currentState, showDropdown: !showDropdown};
        });
    }

    function dropdownMenuHandler(data) {
        const action  = data.action || "";
        setState(currentState => {
            return {...currentState, showDropdown: !showDropdown};
        });
        switch (action) {
            case "addMember":
                navigation.navigate("MembersCreateScreen");
                break;
        }
    }

    useEffect(() => {
        if(isFetchUsers || isFocused) {
            getUsers().then(result => {
                setState(currentState => {
                    return {...currentState, users: result.data, isFetchUsers: false};
                });
            }).catch((err) => {
                console.log({err});
            })
        }
    }, [isFocused, isFetchUsers]);


    const dropdownMenu = [
        {
            id: 0,
            icon: {
                name: "adduser",
                type: "AntDesign",
                color: Colors.blue400,
                size: 20,
            },
            text: "Thêm thành viên",
            action: "addMember"
        },
    ];

    return (
        <View style={styles.rootContainer}>
            <View style={styles.header}>
                <Header onShowDropdownMenu={onShowDropdownMenuHandler}/>
                {showSidebar && <SidebarMenu onPress={categoriesActiveHandler} idActive={idDepartment}/>}
            </View>
            <ListItem data={users}/>
            <ViewDropdown data={dropdownMenu} show={showDropdown} onPress={dropdownMenuHandler}/>
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
