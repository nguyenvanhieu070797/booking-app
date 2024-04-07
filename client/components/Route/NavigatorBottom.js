import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '../../constants/colors'

// Screen
import HomeScreen from '../../screens/HomeScreen'
import ProfileScreen from '../../screens/ProfileScreen'
import SpinWheelScreen from '../../screens/SpinWheelScreen'

// Navigator
const Tab = createBottomTabNavigator();

// UI
import IconButton from '../UI/IconButton';
import { Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

// Redux
import {removeToken} from "../../store/redux/auth";
import {useDispatch} from "react-redux";

function NavigationBottom () {
    const dispatch = new useDispatch();

    return (
        <Tab.Navigator
            screenOptions={() => ({
            headerStyle: { backgroundColor: Colors.purple200 },
                headerTintColor: Colors.grey50,
                tabBarStyle: { backgroundColor: Colors.purple200 },
                tabBarActiveTintColor: Colors.blue500,
                tabBarInactiveTintColor: Colors.grey50,
                headerRight: ({ tintColor }) => (
                    <IconButton
                        icon="exit"
                        color={tintColor}
                        size={24}
                        onPress={() => {
                            dispatch(removeToken());
                        }}
                    />
                ),
            })}
        >
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    title: 'Trang chủ',
                    tabBarLabel: 'Trang chủ',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="SpinWheelScreen"
                component={SpinWheelScreen}
                options={{
                    title: 'Vòng quay may mắn',
                    tabBarLabel: 'Vòng quay',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="life-ring" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{
                    title: 'Tài khoản',
                    tabBarLabel: 'Tài khoản',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account-box" size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default NavigationBottom;
