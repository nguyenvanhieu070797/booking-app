import {View, Text, StyleSheet} from "react-native"
import Card from "../../UI/Card";
import Colors from "../../../constants/colors";
import Icons from "../../../constants/icons";

function ProductItems({dataItem, keyItem}) {
    console.log({dataItem});
    if(dataItem === undefined || Object.values(dataItem).length === 0){
        return "";
    }

    const iconProdDetail = Icons(dataItem.icons.prodDetail);
    const iconTitle = Icons(dataItem.icons.title);
    const iconUserDetail = Icons(dataItem.icons.userDetail);
    const iconUser = Icons(dataItem.icons.user);

    return(
        <Card>
            <View style={styles.rootContainer}>
                <View style={styles.Container}>
                    {iconTitle}
                    <View style={styles.Content}>
                        <View style={styles.headerContainer}>
                            <Text style={styles.textHeader}>
                                {dataItem.title}
                            </Text>
                            {iconProdDetail}
                        </View>
                        <View style={styles.datetimeContainer}>
                            <Text style={styles.textDatetime}>
                                {dataItem.datetime}
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.informationContainer}>
                    {
                        dataItem.parameter && dataItem.parameter.map((total) => {
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

                <View style={[styles.authorContainer, styles.lineTop]} >
                    <View style={styles.authorInformation} >
                        {iconUser}
                        {/*<Image source={{uri: ellipse}} style={{width: 20, height: 20}} resizeMode="cover"/>*/}
                        <Text style={styles.textAuthorInformation} >
                            {dataItem.author}
                        </Text>
                    </View>
                    {iconUserDetail}
                </View>

            </View>
        </Card>
    );
}

export default ProductItems;

const styles = StyleSheet.create({
    rootContainer: {
        alignSelf: 'stretch',
        flexDirection: 'column',
        alignItems: 'flex-start',
        rowGap: 8,
        columnGap: 8,
        borderRadius: 10,
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
    Content: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        rowGap: 6,
        columnGap: 6,
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: 0,
    },
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
        fontFamily: 'open-sans',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '500',
    },
    datetimeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        rowGap: 4,
        columnGap: 4,
        alignSelf: 'stretch',
    },
    textDatetime: {
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: 0,
        color: Colors.darkSecondary,
        fontFamily: 'open-sans',
        fontSize: 10,
        fontStyle: 'normal',
        fontWeight: '400',
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
        fontFamily: 'open-sans',
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: '700',
    },

    lineTop: {

    }

})
