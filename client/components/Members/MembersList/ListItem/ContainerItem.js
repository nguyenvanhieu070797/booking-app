import {StyleSheet, TouchableHighlight, View} from "react-native";
import Colors from "../../../../constants/colors";
import ContentItem from "./ContentItem";

function UsersContainerItem({item, onPress, style}) {
    console.log("UsersContainerItem");
    if (item === undefined || Object.values(item).length === 0) {
        return "";
    }

    return (
        <TouchableHighlight activeOpacity={0.95} key={item.key} onPress={() => onPress(item)}>
            <View style={[styles.rootContainer, style]}>
                <ContentItem key={item.key} item={item}/>
            </View>
        </TouchableHighlight>
    )
}

export default UsersContainerItem;


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
