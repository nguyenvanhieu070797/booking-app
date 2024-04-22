import {
    View,
    Text,
    FlatList,
    Platform,
    TouchableHighlight,
    StyleSheet
} from "react-native";
import Colors from "../../constants/colors";
import DevicesItem from "./DevicesItem";

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
                        datetime: "22/04/2024 4:30am",
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
                        status: "use"
                    },
                    {
                        title: "Máy tính",
                        datetime: "22/04/2024 4:30am",
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
                        status: "use"
                    },
                    {
                        title: "Máy tính",
                        datetime: "22/04/2024 4:30am",
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
                        status: "use"
                    },
                    {
                        title: "Máy tính",
                        datetime: "22/04/2024 4:30am",
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
                        status: "use"
                    },
                    {
                        title: "Máy tính",
                        datetime: "22/04/2024 4:30am",
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
                        status: "use"
                    },
                    {
                        title: "Máy tính",
                        datetime: "22/04/2024 4:30am",
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
                        status: "use"
                    },
                    {
                        title: "Máy tính",
                        datetime: "22/04/2024 4:30am",
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
                        status: "use"
                    },
                    {
                        title: "Máy tính",
                        datetime: "22/04/2024 4:30am",
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
                        status: "use"
                    },
                    {
                        title: "Máy tính",
                        datetime: "22/04/2024 4:30am",
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
                        status: "use"
                    }
                ]}
                renderItem={({item, index}) => {
                    const isMod = index % 2 === 0;
                    return <DevicesItem item={item} key={Math.random()}
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
