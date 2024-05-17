import {StyleSheet, View, Text} from "react-native";
import Card from "../../UI/Card";
import Colors from "../../../constants/colors";
import React, {useState} from "react";
import InputCustom from "../../UI/InputCustom";

function Information() {
    const [text, setText] = useState();

    return (
        <View>
            <Text style={styles.title}>
                Thong tin
            </Text>
            <Card style={styles.card}>
                <View style={styles.container}>
                    {/*<View style={styles.containerLeft}>*/}
                    {/*    <Text style={styles.textLeft}>*/}
                    {/*        Ten san pham*/}
                    {/*    </Text>*/}
                    {/*</View>*/}

                    <View style={styles.containerRight}>
                        <InputCustom
                            label="Ten san pham"
                            value={text}
                            onChange={(text) => setText(text)}
                        />
                    </View>
                </View>

                <View style={styles.container}>
                    {/*<View style={styles.containerLeft}>*/}
                    {/*    <Text style={styles.textLeft}>*/}
                    {/*        Mã thiết bị*/}
                    {/*    </Text>*/}
                    {/*</View>*/}

                    <View style={styles.containerRight}>
                        <InputCustom
                            label="Mã thiết bị"
                            value={text}
                            onChange={(text) => setText(text)}
                        />
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
        marginBottom: 10,
        flexDirection: "row",
    },
    containerLeft: {
        flex: 0.5,
    },
    containerRight: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'flex-end',
        width: "100%",
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
    inputStyle: {
        width: "100%",
        height: 49,
        backgroundColor: "blue",
    }
});
