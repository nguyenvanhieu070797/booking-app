import {View, StyleSheet, Platform} from "react-native";
import HeaderMenu from "../components/Dashboard/Sidebar/HeaderMenu";
import Background from "../components/Dashboard/Background";
import Content from "../components/Dashboard/Content";

function Dashboard() {

    return (
        <Background>
            <View style={styles.container}>
                <HeaderMenu/>
                <Content/>
            </View>
        </Background>
    );
}

export default Dashboard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 100 : 90,
    }
})
