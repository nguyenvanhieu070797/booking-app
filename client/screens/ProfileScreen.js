import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from "react-redux";
import Background from "../components/Profile/Background";

function ProfileScreen() {
    const userId = useSelector(state => state.user.id);

    return (
        <Background>
            <View style={styles.rootContainer}>
                <Text>Tài khoản</Text>
                <Text>{userId}</Text>
            </View>
        </Background>
    );
}

export default ProfileScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 24,
    },
    container: {
        margin: 5
    },
});
