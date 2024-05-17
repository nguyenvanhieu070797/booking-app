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

    const dataItems = [
        {
            title: "Máy tính",
            parameter: [
                {
                    title: "Số lượng",
                    number: 50,
                },
                {
                    title: "Sử dụng",
                    number: 30,
                },
                {
                    title: "Hư",
                    number: 20,
                },
                {
                    title: "Tồn",
                    number: 20,
                },
            ],
            icons: {
                title: {
                    icon: "computer",
                    type: "MaterialIcons",
                    size: 40,
                    color: Colors.blueGrey500
                },
            },
            code: "EL-VM1995",
            userName: "Nguyễn Văn Hiếu",
            datetime: "22/04/2024 6:30 am"
        },
        {
            title: "Máy tính",
            parameter: [
                {
                    title: "Số lượng",
                    number: 50,
                },
                {
                    title: "Sử dụng",
                    number: 30,
                },
                {
                    title: "Hư",
                    number: 20,
                },
                {
                    title: "Tồn",
                    number: 20,
                },
            ],
            icons: {
                title: {
                    icon: "computer",
                    type: "MaterialIcons",
                    size: 40,
                    color: Colors.blueGrey500
                },
            },
            code: "EL-VM1995",
            userName: "Nguyễn Văn Hiếu",
            datetime: "22/04/2024 6:30 am"
        },
        {
            title: "Máy tính",
            parameter: [
                {
                    title: "Số lượng",
                    number: 50,
                },
                {
                    title: "Sử dụng",
                    number: 30,
                },
                {
                    title: "Hư",
                    number: 20,
                },
                {
                    title: "Tồn",
                    number: 20,
                },
            ],
            icons: {
                title: {
                    icon: "computer",
                    type: "MaterialIcons",
                    size: 40,
                    color: Colors.blueGrey500
                },
            },
            code: "EL-VM1995",
            userName: "Nguyễn Văn Hiếu",
            datetime: "22/04/2024 6:30 am"
        },
        {
            title: "Máy tính",
            parameter: [
                {
                    title: "Số lượng",
                    number: 50,
                },
                {
                    title: "Sử dụng",
                    number: 30,
                },
                {
                    title: "Hư",
                    number: 20,
                },
                {
                    title: "Tồn",
                    number: 20,
                },
            ],
            icons: {
                title: {
                    icon: "computer",
                    type: "MaterialIcons",
                    size: 40,
                    color: Colors.blueGrey500
                },
            },
            code: "EL-VM1995",
            userName: "Nguyễn Văn Hiếu",
            datetime: "22/04/2024 6:30 am"
        },
        {
            title: "Máy tính",
            parameter: [
                {
                    title: "Số lượng",
                    number: 50,
                },
                {
                    title: "Sử dụng",
                    number: 30,
                },
                {
                    title: "Hư",
                    number: 20,
                },
                {
                    title: "Tồn",
                    number: 20,
                },
            ],
            icons: {
                title: {
                    icon: "computer",
                    type: "MaterialIcons",
                    size: 40,
                    color: Colors.blueGrey500
                },
            },
            code: "EL-VM1995",
            userName: "Nguyễn Văn Hiếu",
            datetime: "22/04/2024 6:30 am"
        },
        {
            title: "Máy tính",
            parameter: [
                {
                    title: "Số lượng",
                    number: 50,
                },
                {
                    title: "Sử dụng",
                    number: 30,
                },
                {
                    title: "Hư",
                    number: 20,
                },
                {
                    title: "Tồn",
                    number: 20,
                },
            ],
            icons: {
                title: {
                    icon: "computer",
                    type: "MaterialIcons",
                    size: 40,
                    color: Colors.blueGrey500
                },
            },
            code: "EL-VM1995",
            userName: "Nguyễn Văn Hiếu",
            datetime: "22/04/2024 6:30 am"
        },
        {
            title: "Máy tính",
            parameter: [
                {
                    title: "Số lượng",
                    number: 50,
                },
                {
                    title: "Sử dụng",
                    number: 30,
                },
                {
                    title: "Hư",
                    number: 20,
                },
                {
                    title: "Tồn",
                    number: 20,
                },
            ],
            icons: {
                title: {
                    icon: "computer",
                    type: "MaterialIcons",
                    size: 40,
                    color: Colors.blueGrey500
                },
            },
            code: "EL-VM1995",
            userName: "Nguyễn Văn Hiếu",
            datetime: "22/04/2024 6:30 am"
        },
        {
            title: "Máy tính",
            parameter: [
                {
                    title: "Số lượng",
                    number: 50,
                },
                {
                    title: "Sử dụng",
                    number: 30,
                },
                {
                    title: "Hư",
                    number: 20,
                },
                {
                    title: "Tồn",
                    number: 20,
                },
            ],
            icons: {
                title: {
                    icon: "computer",
                    type: "MaterialIcons",
                    size: 40,
                    color: Colors.blueGrey500
                },
            },
            code: "EL-VM1995",
            userName: "Nguyễn Văn Hiếu",
            datetime: "22/04/2024 6:30 am"
        },
        {
            title: "Máy tính",
            parameter: [
                {
                    title: "Số lượng",
                    number: 50,
                },
                {
                    title: "Sử dụng",
                    number: 30,
                },
                {
                    title: "Hư",
                    number: 20,
                },
                {
                    title: "Tồn",
                    number: 20,
                },
            ],
            icons: {
                title: {
                    icon: "computer",
                    type: "MaterialIcons",
                    size: 40,
                    color: Colors.blueGrey500
                },
            },
            code: "EL-VM1995",
            userName: "Nguyễn Văn Hiếu",
            datetime: "22/04/2024 6:30 am"
        }
    ];

    return (
        <View style={styles.rootContainer}>
            <View style={styles.header}>
                <Header/>
                <SidebarMenu onPress={categoriesActiveHandler} idActive={idDepartment}/>
            </View>
            <ListItem data={dataItems}/>
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
