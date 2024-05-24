import {StyleSheet, View, Text, Image} from "react-native"
import Card from "../../UI/Card";
import Colors from "../../../constants/colors";

function Information({data}) {
    return <Card style={styles.card}>
        <View style={styles.imageDeviceContainer}>
            <Image
                source={
                    require("../../../assets/icon.png")
                }
                style={styles.imageDevice}
            />
        </View>
        <View style={[styles.container, styles.containerTop]}>
            <View style={styles.containerLeft}>
                <Text style={styles.textLeft}>
                    Tên
                </Text>
            </View>
            <View style={styles.containerRight}>
                <Text style={styles.textRight}>
                    {data.user_name.toUpperCase()}
                </Text>
            </View>
        </View>
        <View style={styles.line}/>
        <View style={styles.container}>
            <View style={styles.containerLeft}>
                <Text style={styles.textLeft}>
                    Email
                </Text>
            </View>
            <View style={styles.containerRight}>
                <Text style={styles.textRight}>
                    {data.email}
                </Text>
            </View>
        </View>
        <View style={styles.line}/>
        <View style={styles.container}>
            <View style={styles.containerLeft}>
                <Text style={styles.textLeft}>
                    Giới thiệu
                </Text>
            </View>
            <View style={styles.containerRight}>
                <Text style={styles.textRight}>
                    {data.description}
                </Text>
            </View>
        </View>
    </Card>
}

export default Information;

const styles = StyleSheet.create({
    card: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        position: "relative",
        marginTop: 55,
    },
    imageDeviceContainer: {
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        width: "100%",
    },
    imageDevice: {
        width: 120,
        height: 120,
        borderRadius: 100,
        bottom: 55,
        left: 16,
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
    containerTop: {
        marginTop: 60,
    },
    containerLeft: {
        flex: 1,
    },
    containerRight: {
        flex: 3,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    textLeft: {
        fontSize: 16,
        fontFamily: 'open-sans-bold',
        color: Colors.greyOpacity75,
    },
    textRight: {
        fontSize: 16,
        fontFamily: 'open-sans-bold',
        color: Colors.greyOpacity50,
    },
    title: {
        paddingHorizontal: 16,
        paddingVertical: 5,
        fontSize: 20,
        color: Colors.darkPrimary,
        fontFamily: 'open-sans-bold',
    },
})
