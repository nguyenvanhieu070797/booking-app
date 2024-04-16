import {View, Text, StyleSheet} from "react-native"
import Card from "../../UI/Card";
import Colors from "../../../constants/colors";
import {Ionicons} from "@expo/vector-icons";
import Icons from "../../../constants/icons";

function ProductItems() {
    const iconCategories = Icons({
        icon: "computer",
        type: "MaterialIcons",
        size: 40,
        color: Colors.green200
    });
    const iconTitle = Icons({
        icon: "eye",
        type: "AntDesign",
        size: 24,
        color: Colors.green200
    });
    const iconDetail = Icons({
        icon: "card-account-details-outline",
        type: "MaterialCommunityIcons",
        size: 24,
        color: Colors.lightBlue500
    });

    const iconUser = Icons({
        icon: "user",
        type: "FontAwesome",
        size: 24,
        color: Colors.lightBlue500
    });


    return <Card>
        <View style={styles.rootContainer}>

            <View style={styles.Container}>
                {iconCategories}
                <View style={styles.Content}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.textHeader}>
                            Thiết bị máy tính
                        </Text>
                        {iconTitle}
                    </View>
                    <View style={styles.datetimeContainer}>
                        <Text style={styles.textDatetime}>
                            DATETIME
                        </Text>

                    </View>
                </View>
            </View>

            <View style={styles.informationContainer}>
                <View style={styles.informationContent}>
                    <View style={styles.titleInformationContainer}>
                        <Text style={styles.textTitleInformation}>
                            Tổng số lượng
                        </Text>
                    </View>
                    <View style={styles.information}>
                        <View style={styles.textInformationContainer}>
                            <Text style={styles.textInformation}>
                               50
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.informationContent}>
                    <View style={styles.titleInformationContainer}>
                        <Text style={styles.textTitleInformation}>
                            Số lượng sử dụng
                        </Text>
                    </View>
                    <View style={styles.information}>
                        <View style={styles.textInformationContainer}>
                            <Text style={styles.textInformation}>
                               30
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.informationContent}>
                    <View style={styles.titleInformationContainer}>
                        <Text style={styles.textTitleInformation}>
                            Số lượng còn tồn
                        </Text>
                    </View>
                    <View style={styles.information}>
                        <View style={styles.textInformationContainer}>
                            <Text style={styles.textInformation}>
                                20
                            </Text>
                        </View>
                    </View>
                </View>
            </View>


            <View style={styles.authorContainer} >
                <View style={styles.authorInformation} >
                    {iconUser}
                    {/*<Image source={{uri: ellipse}} style={{width: 20, height: 20}} resizeMode="cover"/>*/}
                    <Text style={styles.textAuthorInformation} >
                        Nguyễn Văn Hiếu
                    </Text>
                </View>
                {iconDetail}
            </View>

        </View>
    </Card>
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
        flexDirection: 'row',
        alignItems: 'flex-start',
        rowGap: 8,
        columnGap: 8,
        alignSelf: 'stretch',
    },
    informationContent: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: 0,
    },
    titleInformationContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
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

})
