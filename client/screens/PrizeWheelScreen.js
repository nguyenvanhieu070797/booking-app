import React, { Component } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

import WheelOfFortune from "../components/PrizeWheel/WheelOfFortune"

const participants = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
];

class PrizeWheelScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            winnerValue: null,
            winnerIndex: null,
            started: false,
        };
        this.child = null;
    }

    buttonPress = () => {
        this.setState({
            started: true,
        });
        this.child._onPress();
    };

    render() {
        const wheelOptions = {
            rewards: participants,
            knobSize: 50,
            borderWidth: 5,
            borderColor: "#fff",
            innerRadius: 50,
            duration: 4000,
            backgroundColor: "transparent",
            textAngle: "horizontal",
            textFontSize: 55,
            knobSource: require("../assets/images/test.png"),
            onRef: (ref) => (this.child = ref),
        };

        return (
            <View style={styles.container}>


                <WheelOfFortune
                    options={wheelOptions}
                    getWinner={(value, index) => {
                        this.setState({ winnerValue: value, winnerIndex: index });
                    }}
                />

                {!this.state.started && (
                    <TouchableOpacity
                        onPress={() => this.buttonPress()}
                        style={styles.startButton}
                    >
                        <Text style={styles.startButtonText}>Start</Text>
                    </TouchableOpacity>
                )}


                {this.state.winnerIndex != null && (
                    <View style={styles.winnerView}>
                        <Text style={styles.winnerText}>
                            You win {participants[this.state.winnerIndex]}
                        </Text>
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({ winnerIndex: null });
                                this.child._tryAgain();
                            }}
                            style={styles.tryAgainButton}
                        >
                            <Text style={styles.tryAgainText}>TRY AGAIN</Text>
                        </TouchableOpacity>
                    </View>
                )}

                {/*<View style={styles.winnerView}>*/}
                {/*    <Text style={styles.winnerText}>*/}
                {/*        You win {participants[this.state.winnerIndex]}*/}
                {/*    </Text>*/}
                {/*    <TouchableOpacity*/}
                {/*        onPress={() => {*/}
                {/*            this.setState({ winnerIndex: null });*/}
                {/*            this.child._tryAgain();*/}
                {/*        }}*/}
                {/*        style={styles.tryAgainButton}*/}
                {/*    >*/}
                {/*        <Text style={styles.tryAgainText}>Start</Text>*/}
                {/*    </TouchableOpacity>*/}
                {/*</View>*/}


            </View>
        );
    }
}
export default PrizeWheelScreen;

const styles = StyleSheet.create({
    container: {
        marginTop: 250,
    },
    startButton: {
        marginTop: 250,
        backgroundColor: "white",
        padding: 10,
    },
    startButtonText: {
        color: "blue",
        fontSize: 25,
        fontWeight: "bold",
    },
    winnerView: {
        justifyContent: "center",
        alignItems: "center",
    },

    winnerText: {
        fontSize: 30,
    },
    tryAgainButton: {
        padding: 5,
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    tryAgainText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
    },
});
