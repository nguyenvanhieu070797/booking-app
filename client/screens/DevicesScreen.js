import {View, Text, StyleSheet} from "react-native";
import SidebarMenu from "../components/Devices/SidebarMenu";
import DevicesListItem from "../components/Devices/DevicesListItem";
import Colors from "../constants/colors";
import Header from "../components/Devices/Header";

function DevicesScreen() {
    function categoriesActiveHandler(item) {}

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
                <SidebarMenu onPress={categoriesActiveHandler}/>
            </View>
            <DevicesListItem data={dataItems}/>
        </View>
    )
}

export default DevicesScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
    },
    header: {
        backgroundColor: Colors.grey50,
        paddingTop: 40,
    }
});
