import {useState} from "react";
import {View, StyleSheet} from "react-native";
import SidebarMenu from "./SidebarMenu";
import Header from "./Header";
import ListItem from "./ListItem/Index";
import Colors from "../../../constants/colors";

function DepartmentsList() {
    const [idDepartment, setIdDepartment] = useState(null);
    function categoriesActiveHandler(item) {
        setIdDepartment(item.id);
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

    return (
        <View style={styles.rootContainer}>
            <View style={styles.header}>
                <Header/>
                <SidebarMenu onPress={categoriesActiveHandler} idActive={idDepartment}/>
            </View>
            <ListItem data={Users}/>
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
