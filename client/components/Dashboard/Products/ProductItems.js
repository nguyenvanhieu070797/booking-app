import {View, Text, StyleSheet} from "react-native"
import Card from "../../UI/Card";
import Colors from "../../../constants/colors";
import {Ionicons} from "@expo/vector-icons";

function ProductItems() {
    return <Card>
        <View style={styles.rootContainer}>
            <View style={styles.Container}>
                <View style={styles.Content}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.textHeader} >
                            {`纳宝帝nabatil巧克力威化饼`}
                        </Text>
                        <Ionicons name="home" size={24} color="blue"/>
                        {/*<IconEye />*/}
                    </View>
                    <View style={styles.datetimeContainer} >
                        <Text style={styles.textDatetime} >
                            {`2023-12-26 14:25:22 付款`}
                        </Text>

                    </View>
                </View>
            </View>

            <View style={styles.informationContainer} >
                <View style={styles.informationContent} >
                    <View style={styles.titleInformationContainer} >
                        <Text style={styles.textTitleInformation} >
                            {`付款金额`}
                        </Text>
                    </View>
                    {/*<View style={styles.frame991} >*/}
                    {/*    <Text style={styles._} >*/}
                    {/*        {`￥`}*/}
                    {/*    </Text>*/}
                    {/*    <View style={styles.frame990} >*/}
                    {/*        <Text style={styles.$2646} >*/}
                    {/*            {`26.46`}*/}
                    {/*        </Text>*/}
                    {/*    </View>*/}
                    {/*</View>*/}
                </View>
                <View style={styles.informationContent} >
                    <View style={styles.titleInformationContainer} >
                        <Text style={styles.textTitleInformation} >
                            {`提成比`}
                        </Text>
                    </View>
                    {/*<View style={styles.frame9912} >*/}
                    {/*    <View style={styles.titleInformationContainer} >*/}
                    {/*        <Text style={styles.$10} >*/}
                    {/*            {`10%`}*/}
                    {/*        </Text>*/}
                    {/*    </View>*/}
                    {/*</View>*/}
                </View>
                <View style={styles.informationContent} >
                    <View style={styles.titleInformationContainer} >
                        <Text style={styles.textTitleInformation} >
                            {`收入`}
                        </Text>
                    </View>
                    {/*<View style={styles.frame9914} >*/}
                    {/*    <Text style={styles._2} >*/}
                    {/*        {`￥`}*/}
                    {/*    </Text>*/}
                    {/*    <View style={styles.frame9904} >*/}
                    {/*        <Text style={styles.$26462} >*/}
                    {/*            {`26.46`}*/}
                    {/*        </Text>*/}
                    {/*    </View>*/}
                    {/*</View>*/}
                </View>
            </View>


            {/*<View style={styles.frame4} >*/}
            {/*    <View style={styles.frame1087} >*/}
            {/*        <Image source={{uri: ellipse}} style={{width: 20, height: 20}} resizeMode="cover"/>*/}
            {/*        <Text style={styles.nadilaAulia} >*/}
            {/*            {`Nadila Aulia`}*/}
            {/*        </Text>*/}
            {/*    </View>*/}
            {/*    <IconEye />*/}
            {/*</View>*/}

        </View>
    </Card>
}

export default ProductItems;

const styles = StyleSheet.create({
    rootContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        rowGap: 4,
        columnGap: 4,
        alignSelf: 'stretch',
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
    }
})
