import {Text, View, StyleSheet, ScrollView} from 'react-native';
import BackgroundStart from "../components/BackgroundStart";
import Card from "../components/ui/Card";
import {useSelector} from "react-redux";
import SpinWheel from "../components/ui/SpinWheel"
import Colors from "../constants/colors"

function SpinWheelScreen() {
    const userId = useSelector(state => state.user.id);
    console.log("SpinWheelScreen", {userId});
    return (
        <BackgroundStart>
            <View style={styles.rootContainer}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={styles.scrollViewContainer}>
                    <SpinWheel/>

                    <View style={styles.cardContainer}>
                        <Card style={styles.rankCard}>
                            <View style={styles.rankContainer}>
                                <Text style={styles.textRank}>
                                    1
                                </Text>
                                <Text style={styles.textName}>
                                    Nguyễn Văn Hiếu
                                </Text>
                            </View>
                        </Card>

                        <Card style={styles.rankCard}>
                            <View style={styles.rankContainer}>
                                <Text style={styles.textRank}>
                                    2
                                </Text>
                                <Text style={styles.textName}>
                                    Nguyễn Văn Hiếu
                                </Text>
                            </View>
                        </Card>

                        <Card style={styles.rankCard}>
                            <View style={styles.rankContainer}>
                                <Text style={styles.textRank}>
                                    3
                                </Text>
                                <Text style={styles.textName}>
                                    Nguyễn Văn Hiếu
                                </Text>
                            </View>
                        </Card>

                        <Card style={styles.rankCard}>
                            <View style={styles.rankContainer}>
                                <Text style={styles.textRank}>
                                    4
                                </Text>
                                <Text style={styles.textName}>
                                    Nguyễn Văn Hiếu
                                </Text>
                            </View>
                        </Card>

                        <Card style={styles.rankCard}>
                            <View style={styles.rankContainer}>
                                <Text style={styles.textRank}>
                                    5
                                </Text>
                                <Text style={styles.textName}>
                                    Nguyễn Văn Hiếu
                                </Text>
                            </View>
                        </Card>
                    </View>
                </ScrollView>
            </View>
        </BackgroundStart>
    );
}

export default SpinWheelScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
    },
    spinContainer: {
        flex: 1,
        height: 450
    },
    spinCard: {
        marginTop: 0,
    },
    scrollViewContainer: {
        flex: 1,
    },
    cardContainer: {
        paddingBottom: 10
    },
    rankContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    rankCard: {
        justifyContent: 'left',
        alignItems: 'left',
        marginTop: 5,
        marginBottom: 5
    },
    textRank: {
        marginRight: 20,
        fontWeight: 'bold',
        fontSize: 24,
        color: Colors.blue500,
        fontFamily: 'open-sans-bold',
    },
    textName: {
        fontSize: 24,
        color: Colors.blue500,
        fontFamily: 'open-sans-bold',
    }
});
