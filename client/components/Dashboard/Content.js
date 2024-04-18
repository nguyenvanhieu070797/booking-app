import {ScrollView, StyleSheet} from 'react-native';
import ProductLists from "./Products/ProductLists";
import Categories from "./Categories/Categories";
import Colors from "../../constants/colors";

function Content() {
    const data  = [
        {
            id: "1",
            title: "Máy tính",
            datetime: "22/04/2024",
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
                    title: "Tồn",
                    number: 20,
                },
            ],
            author: "Nguyễn Văn Hiếu",
            icons: {
                title: {
                    icon: "computer",
                    type: "MaterialIcons",
                    size: 40,
                    color: Colors.green200
                },
                prodDetail: {
                    icon: "eye",
                    type: "AntDesign",
                    size: 24,
                    color: Colors.green200
                },
                userDetail: {
                    icon: "card-account-details-outline",
                    type: "MaterialCommunityIcons",
                    size: 24,
                    color: Colors.lightBlue500
                },
                user: {
                    icon: "user",
                    type: "FontAwesome",
                    size: 24,
                    color: Colors.lightBlue500
                }
            }
        },
        {
            id: "2",
            title: "Máy tính",
            datetime: "22/04/2024",
            parameter: [
                {
                    title: "Số lượng",
                    number: 77,
                },
                {
                    title: "Sử dụng",
                    number: 30,
                },
                {
                    title: "Tồn",
                    number: 20,
                },
            ],
            author: "Nguyễn Văn Hiếu",
            icons: {
                title: {
                    icon: "computer",
                    type: "MaterialIcons",
                    size: 40,
                    color: Colors.green200
                },
                prodDetail: {
                    icon: "eye",
                    type: "AntDesign",
                    size: 24,
                    color: Colors.green200
                },
                userDetail: {
                    icon: "card-account-details-outline",
                    type: "MaterialCommunityIcons",
                    size: 24,
                    color: Colors.lightBlue500
                },
                user: {
                    icon: "user",
                    type: "FontAwesome",
                    size: 24,
                    color: Colors.lightBlue500
                }
            }
        },
        {
            id: "3",
            title: "Máy tính",
            datetime: "22/04/2024",
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
                    title: "Tồn",
                    number: 20,
                },
            ],
            author: "Nguyễn Văn Hiếu",
            icons: {
                title: {
                    icon: "computer",
                    type: "MaterialIcons",
                    size: 40,
                    color: Colors.green200
                },
                prodDetail: {
                    icon: "eye",
                    type: "AntDesign",
                    size: 24,
                    color: Colors.green200
                },
                userDetail: {
                    icon: "card-account-details-outline",
                    type: "MaterialCommunityIcons",
                    size: 24,
                    color: Colors.lightBlue500
                },
                user: {
                    icon: "user",
                    type: "FontAwesome",
                    size: 24,
                    color: Colors.lightBlue500
                }
            }
        }
    ];

    return  <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.rootContainer}
    >
        <ProductLists data={data}/>
        <Categories/>
    </ScrollView>
}

export default Content

const styles = StyleSheet.create({
    rootContainer: {
        paddingBottom: 15,
        flex: 1,
        paddingVertical: 7,
    }
});
