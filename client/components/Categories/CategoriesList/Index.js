import {useEffect, useState} from "react";
import {View, StyleSheet} from "react-native";
import SidebarMenu from "./SidebarMenu";
import Header from "./Header";
import ListItem from "./ListItem/Index";
import Colors from "../../../constants/colors";
import { useNavigation } from "@react-navigation/native";
import { useIsFocused } from '@react-navigation/core';

// Get list department
import { getCategories } from "../../../util/categories";
import MenuDropdown from "./MenuDropdown";

const initState = {
    idCategory: null,
    isFetch: true,
    categories: [],
    showDropdown: false,
}

function CategoriesList() {
    const showSidebar = false;
    const isFocused = useIsFocused();
    const navigation = useNavigation();
    const [state, setState] = useState(initState);
    const {showDropdown, categories, isFetch, idCategory} = state;

    function categoriesActiveHandler(item) {
        setState(currentState => {
            return {...currentState, idCategory: item.id, isFetch: true};
        });
    }

    function dropdownMenuHandler() {
        setState(currentState => {
            return {...currentState, showDropdown: !showDropdown};
        });
    }

    function onDropdownMenuHandler(data) {
        const action  = data.action || "";
        switch (action) {
            case "addDepartment":
                navigation.navigate("CategoriesCreateScreen");
                break;
        }
    }

    useEffect(() => {
        if(isFetch || isFocused) {
            getCategories().then(result => {
                console.log({result});
                setState(currentState => {
                    return {
                        ...currentState,
                        categories: result?.data || [],
                        isFetch: false,
                        showDropdown: false,
                    };
                });
            }).catch((err) => {
                console.log({err});
            })
        }
    }, [isFocused, isFetch]);

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

    console.log({categories});

    return (
        <View style={styles.rootContainer}>
            <View style={styles.header}>
                <Header onShowDropdownMenu={dropdownMenuHandler}/>
                {showSidebar && <SidebarMenu onPress={categoriesActiveHandler} idActive={idCategory}/>}
            </View>
            <ListItem data={categories}/>
            <MenuDropdown data={dropdownMenu} show={showDropdown} onPress={onDropdownMenuHandler}/>
        </View>
    )
}

export default CategoriesList;

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
