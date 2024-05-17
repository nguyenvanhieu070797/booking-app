import {View, StyleSheet} from "react-native";
import Header from "../components/Devices/DevicesEdit/Header";
import Colors from "../constants/colors";
import Content from "../components/Devices/DevicesEdit/Content";

function DevicesEditScreen() {

    return (
        <View style={styles.rootContainer}>
            <View style={styles.header}>
                <Header/>
            </View>
            <Content/>
        </View>
    )
}

export default DevicesEditScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flexDirection: "column",
        flex: 1,
    },
    header: {
        backgroundColor: Colors.blue400,
        paddingTop: 42,
    }
});
