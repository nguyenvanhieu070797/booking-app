import React, { useState, useEffect, useRef } from "react";
import {Text, View, StyleSheet, Animated, Dimensions, TouchableOpacity} from "react-native";
import { CameraView, Camera } from "expo-camera";
import Colors from "../../constants/colors";
import Icons from "../UI/Icons";

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const opacity = 'rgba(0, 0, 0, .6)';

export default function CameraScanQR(props) {
    const {onScan, children} = props;
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(true);
    const [sizeQrCode, setSizeQrCode] = useState({width: 0, height: 0});
    const lineAnim = useRef(new Animated.Value(0)).current;

    const onLineLayout = (event) => {
        const {height, width} = event.nativeEvent.layout;
        setSizeQrCode({width: width, height: height});
    };

    const handleAnimationLine = () => {
        lineAnim.setValue(0);
        Animated.timing(lineAnim, {
            toValue: 1,
            duration: 8000,
            useNativeDriver: false,
        }).start(() => handleAnimationLine());
    };

    const transformLine = lineAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, sizeQrCode?.height],
    });

    useEffect(() => {
        handleAnimationLine();
    }, []);

    useEffect(() => {
        const getCameraPermissions = async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === "granted");
        };

        getCameraPermissions();
    }, []);

    const handleBarCodeScanned = ({type, data}) => {
        onScan && onScan(data);
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    const scannerStartHandler = () => {
        if (scanned) {
            setScanned(false);
        }
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.main}>
            <CameraView
                onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
                barcodeScannerSettings={{
                    barcodeTypes: ["qr", "pdf417"],
                }}
                style={[styles.container]}
            >
                <View style={styles.layerTop}></View>
                <View style={styles.layerCenter}>
                    <View style={styles.layerLeft}/>
                    <View style={styles.focused} onLayout={onLineLayout}>
                        <EdgeQRCode position="topRight"/>
                        <EdgeQRCode position="topLeft"/>
                        <Animated.View
                            style={[
                                {
                                    transform: [{translateY: transformLine}],
                                },
                                styles.lineAnim,
                            ]}
                        />
                        <EdgeQRCode position="bottomRight"/>
                        <EdgeQRCode position="bottomLeft"/>
                    </View>
                    <View style={styles.layerRight}/>
                </View>
                <View style={styles.layerBottom}/>
            </CameraView>
            {/* Actions */}
            <View style={styles.bottomAction}>
                <TouchableOpacity onPress={scannerStartHandler} disabled={!scanned}>
                    <View style={styles.bottomButtonAction}>
                        <Icons
                            icon="qrcode-scan"
                            type="MaterialCommunityIcons"
                            size={24}
                            color={scanned ? Colors.white : Colors.lightDisabled}
                        />
                        <Text style={scanned ? styles.bottomTextAction : styles.bottomTextActionDisabled}>
                            {children}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}


function EdgeQRCode({position}) {
    const edgeWidth = 20;
    const edgeHeight = 20;
    const edgeColor = '#FFF';
    const edgeBorderWidth = 1;
    const edgeRadius = 8;

    const defaultStyle = {
        width: edgeWidth,
        height: edgeHeight,
        borderColor: edgeColor,
    };
    const edgeBorderStyle = {
        topRight: {
            borderRightWidth: edgeBorderWidth,
            borderTopWidth: edgeBorderWidth,
            borderTopRightRadius: edgeRadius,
            top: edgeRadius,
            right: edgeRadius,
        },
        topLeft: {
            borderLeftWidth: edgeBorderWidth,
            borderTopWidth: edgeBorderWidth,
            borderTopLeftRadius: edgeRadius,
            top: edgeRadius,
            left: edgeRadius,
        },
        bottomRight: {
            borderRightWidth: edgeBorderWidth,
            borderBottomWidth: edgeBorderWidth,
            borderBottomRightRadius: edgeRadius,
            bottom: edgeRadius,
            right: edgeRadius,
        },
        bottomLeft: {
            borderLeftWidth: edgeBorderWidth,
            borderBottomWidth: edgeBorderWidth,
            borderBottomLeftRadius: edgeRadius,
            bottom: edgeRadius,
            left: edgeRadius,
        },
    };
    return <View style={[defaultStyle, styles[position + 'Edge'], edgeBorderStyle[position]]}/>;
}


const styles = StyleSheet.create({
    bottomAction: {
        backgroundColor: 'rgba(0,0,0,.6)',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 90,
        position: 'absolute',
        width: deviceWidth,
        bottom: 0,
        left: 0,
    },
    bottomButtonAction: {
        alignItems: 'center',
        width: deviceWidth / 2
    },
    bottomTextAction: {
        color: 'white',
        fontSize: 13,
        lineHeight: 22,
        fontFamily: 'font-regular',
        marginTop: 4
    },

    bottomTextActionDisabled: {
        color: Colors.lightDisabled,
        fontSize: 13,
        lineHeight: 22,
        fontFamily: 'font-regular',
        marginTop: 4
    },

    main: {
        height: "100%",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        width: deviceHeight,
        height: deviceHeight / 2,
    },

    layerTop: {
        flex: 1,
        backgroundColor: opacity,
    },

    layerCenter: {
        flex: 1,
        flexDirection: 'row',
    },
    layerLeft: {
        flex: 1,
        backgroundColor: opacity,
    },
    focused: {
        flex: 1,
        position: 'relative',
        borderWidth: 0.5,
        borderColor: '#fff',
        borderRadius: 4,
    },
    layerRight: {
        flex: 1,
        backgroundColor: opacity,
    },

    layerBottom: {
        flex: 1,
        backgroundColor: opacity,
    },

    // edge
    topLeftEdge: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
    topRightEdge: {
        position: 'absolute',
        top: 0,
        right: 0,
    },
    bottomLeftEdge: {
        position: 'absolute',
        bottom: 0,
        left: 0,
    },
    bottomRightEdge: {
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    lineAnim: {height: 2, backgroundColor: '#fff'},
});
