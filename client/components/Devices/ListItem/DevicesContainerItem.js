import {StyleSheet, TouchableHighlight, View} from "react-native";
import Colors from "../../../constants/colors";
import DevicesHeaderItem from "./DevicesHeaderItem";
import DevicesContentItem from "./DevicesContentItem";
import DevicesFooterItem from "./DevicesFooterItem";

function DevicesContainerItem({item, onPress, style}) {
    if (item === undefined || Object.values(item).length === 0) {
        return "";
    }

    return (
        <TouchableHighlight activeOpacity={0.95} key={item.key} onPress={() => onPress(item)}>
            <View style={[styles.rootContainer, style]}>
                <DevicesHeaderItem key={item.key} title={item.title} code={item.code}/>
                <DevicesContentItem key={item.key} item={item}/>
                <DevicesFooterItem key={item.key} item={item}/>
            </View>
        </TouchableHighlight>
    )
}

export default DevicesContainerItem;


const styles = StyleSheet.create({
    rootContainer: {
        backgroundColor: Colors.lightBlue100,
        alignSelf: 'stretch',
        flexDirection: 'column',
        alignItems: 'flex-start',
        rowGap: 8,
        columnGap: 8,
        paddingVertical: 16,
        paddingHorizontal: 16,
    },

})
