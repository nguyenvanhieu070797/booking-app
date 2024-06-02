import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

// Redux
import {useSelector} from 'react-redux';
import Colors from "../constants/colors";

// Screens
import NavigatorBottom from "./NavigatorBottom";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

// Screen ScanQR
import ScanQRScreen from "../screens/ScanQRScreen";
import ScanQRLineScreen from "../screens/ScanQRLineScreen";

// Screen Member
import MembersScreen from "../screens/Members/MembersScreen";
import MembersDetailScreen from "../screens/Members/MembersDetailScreen";
import MembersCreateScreen from "../screens/Members/MembersCreateScreen";

// Screen Device
import DevicesScreen from "../screens/Devices/DevicesScreen";
import DevicesDetailScreen from "../screens/Devices/DevicesDetailScreen";
import DevicesEditScreen from "../screens/Devices/DevicesEditScreen";

// Screen Department
import DepartmentsScreen from "../screens/Departments/DepartmentsScreen"

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
            },

            // Scanner
            {
                name: "ScanQR",
                component: ScanQRScreen,
                options: {
                    headerShown: true,
                    title: 'QR Code',
                    headerTransparent: true,
                    headerShadowVisible: false,
                    headerTintColor: Colors.lightPrimary,
                }
            },
            {
                name: "ScanQRLine",
                component: ScanQRLineScreen,
                options: {
                    headerShown: true,
                    title: 'QR Code',
                    headerTransparent: true,
                    headerShadowVisible: false,
                    headerTintColor: Colors.lightPrimary,
                }
            },

            // Member
            {
                name: "MembersScreen",
                component: MembersScreen,
                options: {
                    headerShown: false,
                    title: 'Thành viên',
                }
            },
            {
                name: "MembersDetailScreen",
                component: MembersDetailScreen,
                options: {
                    headerShown: false,
                    title: 'Thành viên',
                }
            },
            {
                name: "MembersCreateScreen",
                component: MembersCreateScreen,
                options: {
                    title: 'Thông tin thiết bị',
                    headerShown: false
                }
            },

            // Device
            {
                name: "DevicesScreen",
                component: DevicesScreen,
                options: {
                    title: 'Thiết bị',
                    headerShown: false
                }
            },
            {
                name: "DevicesDetailScreen",
                component: DevicesDetailScreen,
                options: {
                    title: 'Thông tin thiết bị',
                    headerShown: false
                }
            },
            {
                name: "DevicesEditScreen",
                component: DevicesEditScreen,
                options: {
                    title: 'Thông tin thiết bị',
                    headerShown: false
                }
            },

            // Department
            {
                name: "DepartmentsScreen",
                component: DepartmentsScreen,
                options: {
                    title: 'Phòng ban',
                    headerShown: false
                }
            },

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


function Navigation() {
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
                    screens.map((screen) => {
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
