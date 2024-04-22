import {
    View,
    Text,
    StyleSheet
} from "react-native";
import Colors from "../../constants/colors";
import React from "react";

function DevicesHeaderItem({title, status}) {
    let classes = {};
    let titleStatus = "";

    switch (status) {
        case "use":
            titleStatus = "Đang dùng";
            classes = styles.use;
            break;
    }

    return (
        <View style={styles.headerContainer}>
            <Text style={styles.textHeader}>
                {title}
            </Text>
            <View style={[styles.statusHeader, classes]}>
                <Text style={styles.textStatusHeader}>
                    {titleStatus}
                </Text>
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
        paddingHorizontal: 4,
        paddingVertical: 2,
        borderRadius: 5,
    },
    statusHeader: {
        justifyContent: "flex-end",
        flexDirection: "row",
    },
    use: {
        backgroundColor: Colors.green100,
    }
})
