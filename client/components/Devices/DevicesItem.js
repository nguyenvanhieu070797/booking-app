import {
    SafeAreaView,
    Text,
    StyleSheet, TouchableHighlight, View
} from "react-native";
import Colors from "../../constants/colors";
import Icons from "../../constants/icons";
import DevicesHeaderItem from "./DevicesHeaderItem";

function DevicesItem({item, onPress, style}) {
    if(item === undefined || Object.values(item).length === 0){
        return "";
    }

    const iconTitle = Icons(item.icons.title);

    return (
        <TouchableHighlight
            key={item.key}
            onPress={() => onPress(item)}
        >
            <View style={[styles.rootContainer, style]}>
                <DevicesHeaderItem key={item.key} title={item.title}/>
                <View style={styles.Container}>
                    {iconTitle}
                    <View style={styles.containerContent}>

                        <View style={styles.informationContainer}>
                            {
                                item.parameter && item.parameter.map((total) => {
                                    return (
                                        <View style={styles.informationContent} key={Math.random().toString()}>
                                            <View style={styles.titleInformationContainer}>
                                                <Text style={styles.textTitleInformation}>
                                                    {total.title}
                                                </Text>
                                            </View>
                                            <View style={styles.information}>
                                                <View style={styles.textInformationContainer}>
                                                    <Text style={styles.textInformation}>
                                                        {total.number}
                                                    </Text>
                                                </View>
                                            </View>
                                        </View>
                                    );
                                })
                            }
                        </View>
                    </View>
                </View>
            </View>
        </TouchableHighlight>
    )
}

export default DevicesItem;


const styles = StyleSheet.create({
    rootContainer: {
        backgroundColor: Colors.lightBlue100,
        alignSelf: 'stretch',
        flexDirection: 'column',
        alignItems: 'flex-start',
        rowGap: 8,
        columnGap: 8,
        paddingVertical: 16,
        paddingHorizontal: 8,
    },
    Container: {
        flexDirection: 'row',
        alignItems: 'center',
        rowGap: 8,
        columnGap: 8,
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: 0,
    },
    containerContent: {
        flex: 1,
        rowGap: 6,
        columnGap: 6,
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: 0,
    },
    informationContainer: {
        marginVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        rowGap: 8,
        columnGap: 8,
        alignSelf: 'stretch',
    },
    informationContent: {
        flexDirection: 'column',
        alignItems: 'center',
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: 0,
    },
    titleInformationContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        rowGap: 4,
        columnGap: 4,
    },
    textTitleInformation: {
        flexDirection: 'row',
        alignItems: 'center',
        fontFamily: 'open-sans-bold',
    },
    information: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textInformationContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    textInformation: {
        color: Colors.darkPrimary,
        textAlign: 'center',
        fontFamily: 'open-sans',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '500',
    },
})
