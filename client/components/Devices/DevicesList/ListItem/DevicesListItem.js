import {
    View,
    FlatList,
    Platform,
    StyleSheet,
    SafeAreaView
} from "react-native";
import Colors from "../../../../constants/colors";
import DevicesContainerItem from "./DevicesContainerItem";
import {useNavigation} from "@react-navigation/native";

function DevicesListItem({data}) {
    const navigation = useNavigation();
    function _onPress(item) {
        navigation.navigate("DevicesDetailScreen", {data: item});
    }

    return (
        <SafeAreaView style={styles.rootContainer}>
            <FlatList
                ItemSeparatorComponent={
                    Platform.OS !== 'android' &&
                    (({highlighted}) => (<View style={[styles.separator, highlighted && {marginLeft: 0}]}/>))
                }
                data={data}
                renderItem={({item, index}) => {
                    const isMod = index % 2 === 0;
                    return <DevicesContainerItem
                        item={item}
                        key={Math.random()}
                        style={isMod ? styles._DevicesContainer : styles.__DevicesContainer}
                        onPress={_onPress}/>
                }}
            />
        </SafeAreaView>
    )
}

export default DevicesListItem;


const styles = StyleSheet.create({
    rootContainer: {
        paddingBottom: 10,
        flex: 1,
    },
    separator: {
        opacity: 0.25,
    },
    _DevicesContainer: {
        backgroundColor: Colors.lightBlue50,
    },
    __DevicesContainer: {
        backgroundColor: Colors.white,
    },
})