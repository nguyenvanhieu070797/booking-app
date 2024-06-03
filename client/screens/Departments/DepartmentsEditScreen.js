import {View, StyleSheet} from "react-native";
import Header from "../../components/Departments/DepartmentsEdit/Header";
import Colors from "../../constants/colors";
import Content from "../../components/Departments/DepartmentsEdit/Content";

function DepartmentsEditScreen() {

    return (
        <View style={styles.rootContainer}>
            <View style={styles.header}>
                <Header/>
            </View>
            <Content/>
        </View>
    )
}

export default DepartmentsEditScreen;

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
