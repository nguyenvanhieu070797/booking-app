import {
    View,
    Text,
    StyleSheet
} from "react-native";
import Colors from "../../../../constants/colors";
import React from "react";
import Icons from "../../../../constants/icons";

function DevicesFooterItem({item}) {

    const iconUser = Icons({
        icon: "user",
        type: "FontAwesome",
        size: 16,
        color: Colors.lightBlue500
    });

    return (
        <View style={[styles.authorContainer, styles.lineTop]}>
            <View style={styles.authorInformation}>
                {iconUser}
                {/*<Image source={{uri: ellipse}} style={{width: 20, height: 20}} resizeMode="cover"/>*/}
                <Text style={styles.textAuthorInformation}>
                    {item.userName}
                </Text>
            </View>
            <View style={styles.datetimeContainer}>
                <Text style={styles.textDatetime}>
                    {item.datetime}
                </Text>
            </View>
        </View>
    )
}

export default DevicesFooterItem;

const styles = StyleSheet.create({
    authorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        rowGap: 10,
        columnGap: 10,
        alignSelf: 'stretch',
    },
    authorInformation: {
        flexDirection: 'row',
        alignItems: 'center',
        rowGap: 4,
        columnGap: 4,
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: 0,
    },
    textAuthorInformation: {
        marginLeft: 5,
        textAlign: 'center',
        fontFamily: 'font-regular',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '500',
        color: Colors.darkSecondary,
    },
    datetimeContainer: {
        justifyContent: "flex-end"
    },
    textDatetime: {
        fontSize: 14,
        fontFamily: 'font-regular',
        fontStyle: 'normal',
        fontWeight: '500',
        color: Colors.darkSecondary,
    }
})
