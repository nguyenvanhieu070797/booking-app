import {View, ScrollView, Text, StyleSheet} from 'react-native';
import BackgroundStart from "../components/BackgroundStart";
import Card from "../components/UI/Card";

function HomeScreen() {
    return (
        <BackgroundStart>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.rootContainer}>
                <Card>
                    <Text>
                        Hello world!!!
                    </Text>
                </Card>
            </ScrollView>
        </BackgroundStart>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        paddingVertical: 7,
    },
});
