import {View, Text, StyleSheet} from "react-native";
import Header from "../components/DevicesDetail/Header";
import Colors from "../constants/colors";
import Content from "../components/DevicesDetail/Content";

function DevicesDetailScreen() {

    return (
        <View style={styles.rootContainer}>
            <View style={styles.header}>
                <Header/>
            </View>
            <Content/>
        </View>
    )
}

export default DevicesDetailScreen;

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
