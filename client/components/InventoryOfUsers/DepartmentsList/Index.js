import {useState} from "react";
import {View, StyleSheet} from "react-native";
import SidebarMenu from "./SidebarMenu";
import Header from "./Header";
import ListItem from "./ListItem/Index";
import Colors from "../../../constants/colors";
import MenuDropdown from "./MenuDropdown";

const initState = {
    idDepartment: null,
    isFetchUsers: true,
    users: [],
    showDropdown: false,
}

function DepartmentsList() {
    const [state, setState] = useState(initState);
    const {showDropdown, idDepartment} = state;

    function categoriesActiveHandler(item) {
        setState(currentState => {
            return {...currentState, idDepartment: item.id};
        });
    }

    const Users = [
        {
            user_id: 0,
            user_name: "Nguyen Van Hieu",
            mail: "n-hieu@cyllenge.com",
            num_of_use: 10,
        },
        {
            user_id: 1,
            user_name: "Tran Van Tan",
            mail: "n-hieu@cyllenge.com",
            num_of_use: 10,
        },
        {
            user_id: 2,
            user_name: "Bui Van Dung",
            mail: "n-hieu@cyllenge.com",
            num_of_use: 10,
        },
        {
            user_id: 3,
            user_name: "Tran Duc Lam",
            mail: "n-hieu@cyllenge.com",
            num_of_use: 10,
        },
    ];


    function dropdownMenuHandler() {
        setState(currentState => {
            return {...currentState, showDropdown: !showDropdown};
        });
    }

    function onDropdownMenuHandler(data) {
        const action  = data.action || "";
        switch (action) {
            case "addDepartment":
                navigation.navigate("MembersCreateScreen");
                break;
        }
    }

    const dropdownMenu = [
        {
            id: 0,
            icon: {
                name: "adduser",
                type: "AntDesign",
                color: Colors.blue400,
                size: 20,
            },
            text: "Thêm phòng ban",
            action: "addDepartment"
        },
    ];

    return (
        <View style={styles.rootContainer}>
            <View style={styles.header}>
                <Header dropdownMenu={dropdownMenuHandler}/>
                <SidebarMenu onPress={categoriesActiveHandler} idActive={idDepartment}/>
            </View>
            <ListItem data={Users}/>
            <MenuDropdown data={dropdownMenu} show={showDropdown} onPress={onDropdownMenuHandler}/>
        </View>
    )
}

export default DepartmentsList;

const styles = StyleSheet.create({
    rootContainer: {
        flexDirection: "column",
        flex: 1,
    },
    header: {
        backgroundColor: Colors.blue400,
        paddingTop: 42,
    }
});
