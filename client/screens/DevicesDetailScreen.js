import {View, Text, StyleSheet} from "react-native";
import Header from "../components/DevicesDetail/Header";
import Colors from "../constants/colors";

function DevicesDetailScreen() {

    return (
        <View style={styles.rootContainer}>
            <View style={styles.header}>
                <Header/>
            </View>
            <View>
                <Text>
                    Chưa phát triển
                </Text>
            </View>
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
