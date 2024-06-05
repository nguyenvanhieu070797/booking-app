import {View, StyleSheet} from "react-native";
import Colors from "../../constants/colors";
import Header from "../../components/Departments/DepartmentsCreate/Header";
import Content from "../../components/Departments/DepartmentsCreate/Content";

function DepartmentsCreateScreen() {

    return (
        <View style={styles.rootContainer}>
            <View style={styles.header}>
                <Header/>
            </View>
            <Content/>
        </View>
    )
}

export default DepartmentsCreateScreen;

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
