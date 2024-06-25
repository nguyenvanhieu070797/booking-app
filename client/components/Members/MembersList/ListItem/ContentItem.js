import {
    View,
    Text,
    StyleSheet, Image
} from "react-native";
import React from "react";
import Colors from "../../../../constants/colors";
import {API_URL} from "@env"
import {useSelector} from 'react-redux'

function ContentItem({item}) {
    const uriImage = `${API_URL}/${item.image}`;
    const token = useSelector((state) => {
        return state?.auth?.token || ""
    });
    return (
        <View style={styles.rootContainer}>
            {/*{*/}
            {/*    item.image && token ?  <Image*/}
            {/*        source={{*/}
            {/*            method: 'GET',*/}
            {/*            uri: uriImage,*/}
            {/*            headers: {Authorization: 'Bearer ' + token}*/}
            {/*        }}*/}
            {/*        style={styles.imageDevice}*/}
            {/*    /> :  <Image*/}
            {/*        source={*/}
            {/*            require("../../../../assets/icon.png")*/}
            {/*        }*/}
            {/*        style={styles.imageDevice}*/}
            {/*    />*/}
            {/*}*/}
            <Image
                style={styles.imageDevice}
                source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
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
                                {item.email}
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
        fontFamily: 'font-bold',
    },
    itemMail: {
        flexDirection: 'row',
        alignItems: 'center',
        fontFamily: 'font-regular',
    },
    imageDevice: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
})
