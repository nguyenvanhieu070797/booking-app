import {StyleSheet, View, Text} from "react-native";
import Card from "../UI/Card";
import Colors from "../../constants/colors";

function Information() {

    return (
        <View>
            <Text style={styles.title}>
                Thong tin
            </Text>
            <Card style={styles.card}>
                <View style={styles.container}>
                    <View style={styles.containerLeft}>
                        <Text style={styles.textLeft}>
                            Ten san pham
                        </Text>
                    </View>
                    <View style={styles.containerRight}>
                        <Text style={styles.textRight}>
                            May tinh
                        </Text>
                    </View>
                </View>
            </Card>
        </View>
    )
}

export default Information;


const styles = StyleSheet.create({
    card: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        position: "relative",
        marginTop: 5,
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
    }
});
