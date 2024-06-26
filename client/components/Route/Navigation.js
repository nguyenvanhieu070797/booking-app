import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Redux
import {useSelector} from 'react-redux';

// Screens
import WelcomeScreen from "../../screens/WelcomeScreen";
import NavigatorBottom from "./NavigatorBottom";
import LoginScreen from "../../screens/LoginScreen";
import RegisterScreen from "../../screens/RegisterScreen";

const Stack = createNativeStackNavigator();

function AuthenticatedStack() {
    return {
        initialRouteName: "MainScreen",
        screenOptions: {
            headerShown: false,
        },
        screens: [
            {
                name: "MainScreen",
                component: NavigatorBottom,
                options: {
                    headerShown: false,
                    title: 'Main',
                    animation: 'none',
                    gestureEnabled: false,
                }
            }
        ]
    }
}

function AuthStack() {
    return {
        initialRouteName: "WelcomeScreen",
        screenOptions: {
            headerShown: false,
        },
        screens: [
            {
                name: "LoginScreen",
                component: LoginScreen,
                options: {
                    headerShown: false,
                    title: 'Đăng nhập',
                    animation: 'none',
                    gestureEnabled: false,
                }
            },
            {
                name: "RegisterScreen",
                component: RegisterScreen,
                options: {
                    headerShown: false,
                    title: 'Đăng ký',
                    animation: 'none',
                    gestureEnabled: false,
                }
            },
            {
                name: "WelcomeScreen",
                component: WelcomeScreen,
                options: {
                    headerShown: false,
                    title: 'Xin chào',
                    animation: 'none',
                    gestureEnabled: false,
                }
            },
        ]
    }
}



function Navigation () {
    const isAuthenticated = useSelector((state) => {
        return state?.auth?.isAuthenticated || false
    });

    const navigationOptions = isAuthenticated === true ? AuthenticatedStack() : AuthStack();
    const screens = navigationOptions?.screens || [];

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={navigationOptions?.initialRouteName || ""}
                screenOptions={navigationOptions?.screenOptions || {}}
            >
                {
                    screens.map((screen ) => {
                        return <Stack.Screen
                            key={screen?.name || ""}
                            name={screen?.name || ""}
                            options={screen?.options || {}}
                            component={screen?.component || ""}
                        />
                    })
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;
