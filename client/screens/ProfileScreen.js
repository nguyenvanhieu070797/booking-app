import {View, StyleSheet} from 'react-native';
import Background from "../components/Profile/Background";
import Header from "../components/Profile/Detail/Header";
import Content from "../components/Profile/Detail/Content";
import Colors from "../constants/colors";

function ProfileScreen() {
    return (
        <Background>
            <View style={styles.rootContainer}>
                <View style={styles.header}>
                    <Header/>
                </View>
                <Content/>
            </View>
        </Background>
    );
}

export default ProfileScreen;

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
