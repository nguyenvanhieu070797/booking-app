import React from 'react';
import {
    StyleSheet,
    View,
    Modal,
    Image,
    ActivityIndicator
} from 'react-native';

function Loader({isLoading}) {
    return (
        <Modal
            transparent={true}
            animationType={'none'}
            visible={isLoading}
            style={{zIndex: 1100}}
            onRequestClose={() => {
            }}>
            <View style={styles.modalBackground}>
                <View style={styles.activityIndicatorWrapper}>
                    <ActivityIndicator
                        animating={isLoading}
                        size="large"
                        color="#fff"/>
                    {/*<Image*/}
                    {/*  source={require('../../assets/favicon.png')}*/}
                    {/*  style={{ height: 80, width: 80 }}*/}
                    {/*  resizeMode="contain"*/}
                    {/*  resizeMethod="resize"*/}
                    {/*/>*/}
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#rgba(0, 0, 0, 0.5)',
        zIndex: 1000,

    },
    activityIndicatorWrapper: {
        height: 100,
        width: 100,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
});

export default Loader;
