import {
    View,
    Text,
    StyleSheet
} from "react-native";
import Colors from "../../../../constants/colors";
import React from "react";
import Icons from "../../../../constants/icons";

function DevicesContentItem({item}) {

    const iconTitle = Icons(item.icons.title);

    return (
        <View style={styles.rootContainer}>
            {iconTitle}
            <View style={styles.container}>
                <View style={styles.content}>
                    {
                        item.parameter && item.parameter.map((prams) => {
                            return (
                                <View style={styles.itemContent} key={Math.random().toString()}>
                                    <View style={styles.itemTitle}>
                                        <Text style={styles.textTitle}>
                                            {prams.title}
                                        </Text>
                                    </View>
                                    <View style={styles.itemNumber}>
                                        <Text style={styles.textInformation}>
                                            {prams.number}
                                        </Text>
                                    </View>
                                </View>
                            );
                        })
                    }
                </View>
            </View>
        </View>
    )
}

export default DevicesContentItem;

const styles = StyleSheet.create({
    rootContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        rowGap: 8,
        columnGap: 8,
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: 0,
    },
    container: {
        flex: 1,
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: 0,
    },
    content: {
        marginVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        rowGap: 8,
        columnGap: 8,
        alignSelf: 'stretch',
    },
    itemContent: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        flexGrow: 1,
        flexBasis: 0,
        borderStartWidth: 1,
        borderStartColor: Colors.grey300,
        marginLeft: 3,
    },
    itemTitle: {
        flexDirection: 'column',
        alignItems: 'center',
        rowGap: 4,
        columnGap: 4,
    },
    textTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        fontFamily: 'open-sans-bold',
    },
    itemNumber: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    number: {
        color: Colors.darkPrimary,
        textAlign: 'center',
        fontFamily: 'open-sans',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '500',
    },
})
