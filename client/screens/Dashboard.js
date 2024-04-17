import {View, ScrollView, StyleSheet, Platform} from "react-native";
import Header from "../components/Dashboard/Sidebar/Header";
import Background from "../components/Dashboard/Background";
import Content from "../components/Dashboard/Content";

function Dashboard() {

    return (
        <Background>
            <View style={styles.container}>
                <Header/>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={styles.rootContainer}
                >
                    <Content/>
                </ScrollView>
            </View>

        </Background>
    );
}

export default Dashboard;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        paddingVertical: 7,
    },
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 100 : 90,
    }
})
