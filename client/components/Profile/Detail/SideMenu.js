import {StyleSheet, View, Text, Image} from "react-native"
import Card from "../../UI/Card";
import Colors from "../../../constants/colors";
import PrimaryButton from "../../UI/PrimaryButton";

function SideMenu() {

    function updatePicture() {

    }

    return (
        <Card style={styles.card}>
            <View style={styles.imageDeviceContainer}>
                <Image
                    source={
                        require("../../../assets/images/user/avatar/tester.jpg")
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
                        NGUYEN VAN HIEU
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
    )
}

export default SideMenu;


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
        marginBottom: 200,
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
    buttonUpdateContainer: {
        marginTop: 60,
        flexDirection: "row",
    },
    buttonPrimaryLeft: {
        container: {
            borderRadius: 5,
            flex: 1,
            marginRight: 2,
        },
        text: {
            fontFamily: 'open-sans-bold',
        },
        pressed: {
            paddingVertical: 10,
            elevation: 2,
        }
    },
    buttonPrimaryRight: {
        container: {
            borderRadius: 5,
            flex: 1,
            marginLeft: 2,
        },
        text: {
            fontFamily: 'open-sans-bold',
        },
        pressed: {
            paddingVertical: 10,
            elevation: 2,
        }
    },

    // Information
    container: {
        flexDirection: "row",
    },
    containerTop: {
        marginTop: 75,
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
