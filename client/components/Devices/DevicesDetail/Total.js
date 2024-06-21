import {StyleSheet, View, Text} from "react-native"
import Card from "../../UI/Card";
import Colors from "../../../constants/colors";

function Total() {

    return <View>
        <Text style={styles.title}>
            So luong xuat
        </Text>
        <Card style={styles.card}>
            <View style={styles.container}>
                <View style={styles.containerLeft}>
                    <Text style={styles.textLeft}>
                        Tong so luong
                    </Text>
                </View>
                <View style={styles.containerRight}>
                    <Text style={styles.textRight}>
                        50
                    </Text>
                </View>
            </View>
            <View style={styles.line}/>

            <View style={styles.container}>
                <View style={styles.containerLeft}>
                    <Text style={styles.textLeft}>
                        So luong su dung
                    </Text>
                </View>
                <View style={styles.containerRight}>
                    <Text style={styles.textRight}>
                        30
                    </Text>
                </View>
            </View>
            <View style={styles.line}/>

            <View style={styles.container}>
                <View style={styles.containerLeft}>
                    <Text style={styles.textLeft}>
                        So luong hu hai
                    </Text>
                </View>
                <View style={styles.containerRight}>
                    <Text style={styles.textRight}>
                        5
                    </Text>
                </View>
            </View>
            <View style={styles.line}/>

            <View style={styles.container}>
                <View style={styles.containerLeft}>
                    <Text style={styles.textLeft}>
                        So luong ton
                    </Text>
                </View>
                <View style={styles.containerRight}>
                    <Text style={styles.textRight}>
                        15
                    </Text>
                </View>
            </View>
        </Card>
    </View>
}

export default Total;


const styles = StyleSheet.create({
    card: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    line: {
        marginVertical: 8,
        width: "100%",
        borderBottomColor: Colors.greyOpacity25,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    container: {
        flexDirection: "row",
    },
    containerLeft: {
        flex: 1,
    },
    containerRight: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    textLeft: {
        fontSize: 16,
        fontFamily: 'font-bold',
        color: Colors.greyOpacity75,
    },
    textRight: {
        fontSize: 16,
        fontFamily: 'font-bold',
        color: Colors.greyOpacity50,
    },
    title: {
        paddingHorizontal: 16,
        paddingVertical: 5,
        fontSize: 20,
        color: Colors.darkPrimary,
        fontFamily: 'font-bold',
    }
})
