import {StyleSheet, ImageBackground} from 'react-native';

function Background({children}) {
    return <ImageBackground
        source={require('../../assets/images/dashboard/background.jpg')}
        // resizeMode="stretch"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
    >
        {children}
    </ImageBackground>
}

export default Background;

const styles = StyleSheet.create({
    rootScreen: {
        width: '100%', // applied to Image
        height: 387,
    },
    backgroundImage: {},

})
