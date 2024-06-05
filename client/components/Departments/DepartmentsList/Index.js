import {useEffect, useState} from "react";
import {View, StyleSheet, Alert} from "react-native";
import SidebarMenu from "./SidebarMenu";
import Header from "./Header";
import ListItem from "./ListItem/Index";
import Colors from "../../../constants/colors";
import {useNavigation} from "@react-navigation/native";
import { useIsFocused } from '@react-navigation/core';

// Get list department
import {getDepartment} from "../../../util/departments";
import MenuDropdown from "./MenuDropdown";

const initState = {
    idDepartment: null,
    isFetchDepartments: true,
    departments: [],
    showDropdown: false,
}

function MembersList() {
    const showSidebar = false;
    const isFocused = useIsFocused();
    const navigation = useNavigation();
    const [state, setState] = useState(initState);
    const {showDropdown, departments, isFetchDepartments, idDepartment} = state;
    function categoriesActiveHandler(item) {
        setState(currentState => {
            return {...currentState, idDepartment: item.id, isFetchDepartments: true};
        });
    }

    function dropdownMenuHandler() {
        setState(currentState => {
            return {...currentState, showDropdown: !showDropdown};
        });
    }

    function onDropdownMenuHandler(data) {
        const action  = data.action || "";
        console.log({action});
        switch (action) {
            case "addDepartment":
                navigation.navigate("DepartmentsCreateScreen");
                break;
        }
    }

    useEffect(() => {
        if(isFetchDepartments || isFocused) {
            getDepartment().then(result => {
                setState(currentState => {
                    return {
                        ...currentState,
                        departments: result?.data || [],
                        isFetchDepartments: false,
                        showDropdown: false,
                    };
                });
            }).catch((err) => {
                console.log({err});
            })
        }
    }, [isFocused, isFetchDepartments]);


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

    console.log({departments});

    return (
        <View style={styles.rootContainer}>
            <View style={styles.header}>
                <Header onShowDropdownMenu={dropdownMenuHandler}/>
                {showSidebar && <SidebarMenu onPress={categoriesActiveHandler} idActive={idDepartment}/>}
            </View>
            <ListItem data={departments}/>
            <MenuDropdown data={dropdownMenu} show={showDropdown} onPress={onDropdownMenuHandler}/>
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
