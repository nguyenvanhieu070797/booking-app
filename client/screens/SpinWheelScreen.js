import {Text, View, StyleSheet, ScrollView} from 'react-native';
import BackgroundStart from "../components/BackgroundStart";
import Card from "../components/ui/Card";
import {useSelector} from "react-redux";
import SpinWheel from "../components/ui/SpinWheel"
import Colors from "../constants/colors"
import {useState, useEffect} from "react"

const participants = [
    'Hiếu 1',
    'Hiếu 2',
    'Hiếu 3',
    'Hiếu 4',
    'Hiếu 5',
    'Hiếu 6',
    'Hiếu 7',
    'Hiếu 8',
];

function SpinWheelScreen() {
    const userId = useSelector(state => state.user.id);
    const [dataSpinWheel, setDataSpinWheel] = useState(participants)
    const [dataWinner, setDataWinner] = useState([]);

    // useEffect(() => {
    //
    // }, [dataSpinWheel]);

    function spinWheelHandler(value) {
        if (dataSpinWheel.length) {
            setDataSpinWheel((spins) =>
                spins.filter(val => val !== value)
            );
            dataWinner.push(value);
            setDataWinner(dataWinner)
        } else {
            setDataSpinWheel(participants);
        }
    }

    return (
        <BackgroundStart>
            <View style={styles.rootContainer}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={styles.scrollViewContainer}>
                    <SpinWheel
                        onPress={spinWheelHandler}
                        data={dataSpinWheel}
                    />
                    {
                        dataWinner.length && <View style={styles.cardContainer}>
                            {
                                dataWinner.map((value, index) => {
                                    console.log({value, index});

                                    return (
                                        <Card key={index} style={styles.rankCard}>
                                            <View style={styles.rankContainer}>
                                                <Text style={styles.textRank}>
                                                    {index.toString()}
                                                </Text>
                                                <Text style={styles.textName}>
                                                    {value.toString()}
                                                </Text>
                                            </View>
                                        </Card>
                                    )
                                })
                            }
                        </View>
                    }

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
