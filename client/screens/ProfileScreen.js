import {View, Text, StyleSheet} from 'react-native';
import BackgroundStart from "../components/BackgroundStart";
import {useSelector} from "react-redux";

function ProfileScreen() {
    const userId = useSelector(state => state.user.id);

    return (
        <BackgroundStart>
            <View style={styles.rootContainer}>
                <Text>Tài khoản</Text>
                <Text>{userId}</Text>
            </View>
        </BackgroundStart>
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
