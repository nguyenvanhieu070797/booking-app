import {
    View,
    Text,
    StyleSheet, Image
} from "react-native";
import React from "react";
import Colors from "../../../../constants/colors";

function ContentItem({item}) {
    // const iconTitle = Icons(item.icons.title);
    console.log(item);
    return (
        <View style={styles.rootContainer}>
            {/*{iconTitle}*/}
            <Image
                source={
                    require("../../../../assets/icon.png")
                }
                style={styles.imageDevice}
            />
            <View style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.itemContent} key={Math.random().toString()}>
                        <View style={styles.itemTitle}>
                            <Text style={styles.textTitle}>
                                {item.user_name.toUpperCase()}
                            </Text>
                        </View>
                        <View style={styles.itemMail}>
                            <Text style={styles.textInformation}>
                                {item.mail}
                            </Text>
                        </View>
                        <View style={styles.itemMail}>
                            <Text style={styles.textInformation}>
                               Su dung {item.num_of_use} thiet bi
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ContentItem;

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
        alignItems: 'flex-start',
        flexGrow: 1,
        flexBasis: 0,
        borderStartWidth: 1,
        borderStartColor: Colors.grey300,
        paddingLeft: 5,
    },
    itemTitle: {
        flexDirection: 'column',
        alignItems: 'center',
        rowGap: 4,
        columnGap: 4,
    },
    textTitle: {
        fontSize: 18,
        flexDirection: 'row',
        alignItems: 'center',
        fontFamily: 'open-sans-bold',
    },
    itemMail: {
        flexDirection: 'row',
        alignItems: 'center',
        fontFamily: 'open-sans',
    },
    imageDevice: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
})
