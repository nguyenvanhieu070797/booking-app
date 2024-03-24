import {View, Text, StyleSheet} from 'react-native';
import BackgroundStart from "../components/BackgroundStart";
import Card from "../components/ui/Card";
import {useSelector} from "react-redux";

function HomeScreen() {
    console.log("HomeScreen");
    const userId = useSelector(state => state.user.id);
    return (
        <BackgroundStart>
            <View style={styles.rootContainer}>
                <Card>
                    <Text>
                        {userId}
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
