import {useEffect, useState} from "react";
import {View, StyleSheet, Alert} from "react-native";
import SidebarMenu from "./SidebarMenu";
import Header from "./Header";
import ListItem from "./ListItem/Index";
import Colors from "../../../constants/colors";
import {useNavigation} from "@react-navigation/native";

// Get list user
import {getUsers} from "../../../util/users";
import ViewDropdown from "./ViewDropdown";

function MembersList() {
    const navigation = useNavigation();
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
        const action  = data.action || "";
        switch (action) {
            case "addMember":
                navigation.navigate("MembersCreateScreen");
                break;
        }

        setShowDropdown(false);
    }

    useEffect(() => {
        if(isFetchUser) {
            getUsers().then(result => {
                setIsFetchUser(false)
                return result.data;
            }).then((data) => {
                setUsers(data)
            }).catch((err) => {
                console.log({err});
            })
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
            action: "addMember"
        },
    ];

    console.log("MembersList");

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
