import {StyleSheet, View, Text} from "react-native"
import Card from "../../UI/Card";
import Colors from "../../../constants/colors";

function Information() {

    return <View>
        <Text style={styles.title}>
            Thông tin
        </Text>
        <Card style={styles.card}>
            <View style={styles.container}>
                <View style={styles.containerLeft}>
                    <Text style={styles.textLeft}>
                        Tên
                    </Text>
                </View>
                <View style={styles.containerRight}>
                    <Text style={styles.textRight}>
                        Nguyễn Văn Hiếu
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
                        n-hieu@cyllenge.com
                    </Text>
                </View>
            </View>
            <View style={styles.line}/>

            <View style={styles.container}>
                <View style={styles.containerLeft}>
                    <Text style={styles.textLeft}>
                        Ngay sinh
                    </Text>
                </View>
                <View style={styles.containerRight}>
                    <Text style={styles.textRight}>
                        07/07/1997
                    </Text>
                </View>
            </View>
            <View style={styles.line}/>

            <View style={styles.container}>
                <View style={styles.containerLeft}>
                    <Text style={styles.textLeft}>
                        Giới tính
                    </Text>
                </View>
                <View style={styles.containerRight}>
                    <Text style={styles.textRight}>
                        Nam
                    </Text>
                </View>
            </View>
            <View style={styles.line}/>

            <View style={styles.container}>
                <View style={styles.containerLeft}>
                    <Text style={styles.textLeft}>
                        Chức vụ
                    </Text>
                </View>
                <View style={styles.containerRight}>
                    <Text style={styles.textRight}>
                        Nhân viên
                    </Text>
                </View>
            </View>
        </Card>
    </View>
}

export default Information;


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
})
