import {useEffect, useCallback} from 'react';
import {StyleSheet} from 'react-native';

// Size Bar
import {StatusBar} from 'expo-status-bar';

// Set Linear Gradient
import {LinearGradient} from 'expo-linear-gradient';
import Colors from './constants/colors';

// Set font
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

// Screens
import Navigation from "./components/Route/Navigation";
import {store} from "./store/redux/store";

// Redux
import {Provider} from 'react-redux';
import LoadingOverlay from "./components/UI/LoadingOverlay";


SplashScreen.preventAutoHideAsync();

export default function App() {
    const [fontsLoaded] = useFonts({
        "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
        "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    });

    useEffect(() => {
        async function prepare() {
            await SplashScreen.preventAutoHideAsync();
        }
        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return  <LoadingOverlay message="Loading..." />;
    }

    return (
        <>
            <StatusBar style="dark"/>
            <LinearGradient
                    colors={[Colors.darkDividers, Colors.darkDividers]}
                    resizeMode="cover"
                    style={styles.rootScreen}
                    onLayout={onLayoutRootView}
                >
                <Provider store={store}>
                    <Navigation/>
                </Provider>
            </LinearGradient>
        </>
    );
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    backgroundImage: {
        flex: 1,
    },
});
