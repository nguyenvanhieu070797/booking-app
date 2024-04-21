import {
    View,
    Text,
    StyleSheet
} from "react-native";
import Colors from "../../constants/colors";
import Icons from "../UI/Icons";
import React from "react";

function DevicesHeaderItem({title}) {

    return (
        <View style={styles.headerContainer}>
            <Text style={styles.textHeader}>
                {title}
            </Text>
            <View style={styles.statusHeader}>
                <Text style={styles.textStatusHeader}>
                    Trạng thái
                </Text>
                <Icons
                    icon="qrcode-scan"
                    type="MaterialCommunityIcons"
                    size={14}
                    color={Colors.green500}
                />
            </View>
        </View>
    )
}

export default DevicesHeaderItem;


const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        rowGap: 2,
        columnGap: 2,
        alignSelf: 'stretch',
    },
    textHeader: {
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: 0,
        overflow: 'hidden',
        color: Colors.darkSecondary,
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: '500',
        justifyContent: "flex-start",
    },
    textStatusHeader: {
        color: Colors.darkSecondary,
        fontFamily: 'open-sans-bold',
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: '500',
        marginRight: 5
    },
    statusHeader: {
        justifyContent: "flex-end",
        flexDirection: "row",
    }
})
