import {useEffect, useState} from "react";
import {View, StyleSheet, Alert} from "react-native";
import SidebarMenu from "./SidebarMenu";
import Header from "./Header";
import ListItem from "./ListItem/Index";
import Colors from "../../../constants/colors";

// Get list user
import {getUsers} from "../../../util/users";
import ViewDropdown from "./ViewDropdown";

function MembersList() {
    const showSidebar = false;
    const [idDepartment, setIdDepartment] = useState(null);
    const [isFetchUser, setIsFetchUser] = useState(true);
    const [users, setUsers] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);

    function categoriesActiveHandler(item) {
        setIdDepartment(item.id);
        setIsFetchUser(true);
    }

    function onShowDropdownMenuHandler() {
        console.log({showDropdown});
        setShowDropdown(!showDropdown);
    }

    function dropdownMenuHandler(data) {
        console.log({data});
        setShowDropdown(false);
    }

    useEffect(() => {
        if(isFetchUser) {
            getUsers().then(result => {
                console.log(result.data);
                setUsers(result.data)
            });
            setIsFetchUser(false)
        }
    }, [isFetchUser]);


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
        },
    ];

    console.log({users});

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
