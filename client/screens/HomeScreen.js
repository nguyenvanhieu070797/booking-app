import {View, Text, StyleSheet} from 'react-native';
import BackgroundStart from "../components/BackgroundStart";
import Card from "../components/UI/Card";

function HomeScreen() {
    return (
        <BackgroundStart>
            <View style={styles.rootContainer}>
                <Card>
                    <Text>
                        Hello world!!!
                    </Text>
                </Card>
            </View>
        </BackgroundStart>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
    },
});
