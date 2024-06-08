import {View, Text, StyleSheet} from "react-native";
import Colors from "../../constants/colors";
import Header from "../../components/Members/MembersCreate/Header";
import Content from "../../components/Members/MembersCreate/Content";

function CategoriesCreateScreen() {

    return (
        <View style={styles.rootContainer}>
            <View style={styles.header}>
                <Header/>
            </View>
            <Content/>
        </View>
    )
}

export default CategoriesCreateScreen;

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
