import {
    View,
    FlatList,
    Platform,
    StyleSheet
} from "react-native";
import Colors from "../../constants/colors";
import DevicesContainerItem from "./DevicesContainerItem";

function DevicesListItem() {

    function _onPress(item) {
        console.log({item});
    }

    return (
        <View>
            <FlatList
                ItemSeparatorComponent={
                    Platform.OS !== 'android' &&
                    (({highlighted}) => (<View style={[styles.separator, highlighted && {marginLeft: 0}]}/>))
                }
                data={[
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
                ]}
                renderItem={({item, index}) => {
                    const isMod = index % 2 === 0;
                    return <DevicesContainerItem
                        item={item}
                        key={Math.random()}
                        style={isMod ? styles._DevicesContainer : styles.__DevicesContainer}
                        onPress={_onPress}/>
                }}
            />
        </View>
    )
}

export default DevicesListItem;


const styles = StyleSheet.create({
    separator: {
        opacity: 0.25,
    },
    _DevicesContainer: {
        backgroundColor: Colors.grey50,
    },
    __DevicesContainer: {
        backgroundColor: Colors.blueGrey50,
    },
})
