import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
} from 'react-native';

import WheelOfFortune from './WheelOfFortune';

class SpinWheel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            winnerValue: null,
            winnerIndex: null,
            started: false,
            data: props.data || []
        };
        this.child = null;
    }

    UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
        this.setState({data: nextProps.data || []});
    }

    buttonPress = () => {
        this.setState({
            started: true,
        });
        this.child._onPress();
    };

    buttonPressAgain = () => {
        this.setState({
            winnerIndex: null
        });
        this.child._tryAgain();
    }

    render() {
        const wheelOptions = {
            rewards: this.state.data,
            knobSize: 30,
            borderWidth: 5,
            borderColor: '#fff',
            innerRadius: 30,
            duration: 6000,
            backgroundColor: 'transparent',
            textAngle: 'horizontal',
            knobSource: require("../../../assets/images/knob.png"),
            onRef: ref => (this.child = ref),
        };
        return (
            <View style={styles.container}>
                <StatusBar barStyle={'light-content'} />
                <WheelOfFortune
                    options={wheelOptions}
                    getWinner={(value, index) => {
                        this.setState({
                            winnerValue: value,
                            winnerIndex: index
                        });
                    }}
                    onPress={(value, index) => this.props.onPress(value, index)}
                />
                {!this.state.started && (
                    <View style={styles.startButtonView}>
                        <TouchableOpacity
                            onPress={() => this.buttonPress()}
                            style={styles.startButton}>
                            <Text style={styles.startButtonText}>Spin to win!</Text>
                        </TouchableOpacity>
                    </View>
                )}
                {this.state.winnerIndex != null && (
                    <View style={styles.winnerView}>
                        <Text style={styles.winnerText}>
                            You win {this.state.data[this.state.winnerIndex]}
                        </Text>
                        <TouchableOpacity
                            onPress={() => this.buttonPressAgain()}
                            style={styles.tryAgainButton}>
                            <Text style={styles.tryAgainText}>TRY AGAIN</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        );
    }
}
export default SpinWheel;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 500,
        minWidth: "auto",

    },
    startButtonView: {
        position: 'absolute',
    },
    startButton: {
        backgroundColor: 'rgba(0,0,0,.5)',
        marginTop: 50,
        padding: 5,
    },
    startButtonText: {
        fontSize: 50,
        color: '#fff',
        fontWeight: 'bold',
    },
    winnerView: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },
    winnerText: {
        fontSize: 30,
    },
    tryAgainButton: {
        padding: 5,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    tryAgainText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
});
