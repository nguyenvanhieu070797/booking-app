import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {RNCamera} from 'react-native-camera';

const CameraScanQRLines = ({navigation}) => {

    return (<RNCamera
    style={{
        flex: 1,
        width: '100%',
    }}
    type={'back'}
    flashMode={'off'}
    autoFocus={'on'}
    zoom={0}
    whiteBalance={'auto'}
    ratio={'16:9'}
    focusDepth={0}
    trackingEnabled
    androidCameraPermissionOptions={{
        title: 'Permission to use camera',
        message: 'We need your permission to use your camera',
        buttonPositive: 'Ok',
        buttonNegative: 'Cancel',
    }}

    onTextRecognized={({text}) => {
        console.log(text)
    }}
    />
    );
};

const styles = StyleSheet.create({});

export default CameraScanQRLines;
