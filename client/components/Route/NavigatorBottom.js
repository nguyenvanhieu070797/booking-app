import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Colors from '../../constants/colors'

// Screen
import ProfileScreen from '../../screens/ProfileScreen'

// Navigator
const Tab = createBottomTabNavigator();

// UI
import IconButton from '../UI/IconButton';
import {Ionicons, FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';

// Redux
import {removeToken} from "../../store/redux/auth";
import {useDispatch} from "react-redux";

// Storage
import AsyncStorage from '@react-native-async-storage/async-storage';
import Dashboard from "../../screens/Dashboard";

function NavigationBottom() {
    const dispatch = new useDispatch();

    return (
        <Tab.Navigator
            screenOptions={() => ({
                tabBarStyle: {backgroundColor: Colors.grey50},
                tabBarActiveTintColor: Colors.red500,
                tabBarInactiveTintColor: Colors.grey500,
            })}
        >
            <Tab.Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                    title: 'Trang chủ',
                    tabBarLabel: 'Trang chủ',
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="home" size={size} color={color}/>
                    ),
                    headerStyle: {},
                    headerTransparent: true,
                    headerShadowVisible: false,
                    headerTintColor: Colors.darkPrimary,
                    // headerRight: ({tintColor}) => (
                    //     <IconButton
                    //         icon="exit"
                    //         color={tintColor}
                    //         size={24}
                    //         onPress={() => {
                    //             dispatch(removeToken());
                    //             AsyncStorage.removeItem("token");
                    //         }}
                    //     />
                    // ),
                }}
            />
            <Tab.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{
                    title: 'Tài khoản',
                    tabBarLabel: 'Tài khoản',
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="account-box" size={size} color={color}/>
                    ),
                    headerShown: false,
                    headerStyle: {},
                    headerTransparent: true,
                    headerShadowVisible: false,
                    headerTintColor: Colors.darkPrimary,
                }}
            />
        </Tab.Navigator>
    )
}

export default NavigationBottom;
