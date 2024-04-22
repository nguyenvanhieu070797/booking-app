import {StyleSheet, ImageBackground} from 'react-native';

function BackgroundStart({children}) {
    return <ImageBackground
        source={require('../assets/images/header/background-screen.png')}
        // resizeMode="stretch"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
    >
        {children}
    </ImageBackground>
}

export default BackgroundStart;

const styles = StyleSheet.create({
    rootScreen: {
        width: '100%', // applied to Image
        height: '100%'
    },
    backgroundImage: {
        resizeMode: 'stretch'
    },

})
