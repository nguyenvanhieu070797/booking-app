import {StyleSheet, ImageBackground} from 'react-native';

function BackgroundStart({children}) {
    return  <ImageBackground
        source={require('../assets/images/header/background-screen.png')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
    >
        {children}
    </ImageBackground>
}

export default BackgroundStart;

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
    },

})
