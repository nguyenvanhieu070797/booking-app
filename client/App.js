import {useState, useEffect, useCallback} from 'react';
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
import Navigation from "./routes/Navigation";
import {store} from "./store/redux/store";

// Redux
import {Provider, useDispatch} from 'react-redux';
import LoadingOverlay from "./components/UI/LoadingOverlay";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {setToken} from "./store/redux/auth";

SplashScreen.preventAutoHideAsync();

/**
 * Check store token
 * @returns {JSX.Element}
 * @constructor
 */
function Root() {
    const [isTryingLogin, setIsTryingLogin] = useState(true);
    const dispatch = useDispatch();
    useEffect(() => {
        async function fetchToken() {
            const storedToken = await AsyncStorage.getItem("token")
            console.log({storedToken});
            if (storedToken) {
                dispatch(setToken({token: storedToken}));
            }
            setIsTryingLogin(false);
        }

        fetchToken();
    }, []);

    if (isTryingLogin) {
        return <LoadingOverlay message="Waring for you...."/>
    }

    return <Navigation/>;
}

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
        return <LoadingOverlay message="Loading..."/>;
    }

    return (
        <>
            <StatusBar style="light"/>
            <LinearGradient
                colors={[Colors.darkDividers, Colors.darkDividers]}
                resizeMode="cover"
                style={styles.rootScreen}
                onLayout={onLayoutRootView}
            >
                <Provider store={store}>
                    <Root/>
                </Provider>
            </LinearGradient>
        </>
    );
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
    },
});
