import {View, StyleSheet, ImageBackground} from 'react-native';

function Background({children}) {
    return <View>
        <ImageBackground
            source={require('../../assets/images/dashboard/background.jpg')}
            style={styles.rootScreen}
            imageStyle={styles.backgroundImage}
            resizeMode={'cover'}
        >
            {children}
        </ImageBackground>
    </View>
}

export default Background;

const styles = StyleSheet.create({
    rootScreen: {
        width: '100%',
        height: '100%',
        backgroundColor: "#F7F8FA"
    },
    backgroundImage: {
        width: '100%',
        height: 350,
    },

})
