import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '../../constants/colors'
import HomeScreen from '../../screens/HomeScreen'
import ProfileScreen from '../../screens/ProfileScreen'
const Tab = createBottomTabNavigator();
import IconButton from '../ui/IconButton';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

function NavigationBottom () {
    return (
        <Tab.Navigator
            screenOptions={({ navigation }) => ({
            headerStyle: { backgroundColor: Colors.purple200 },
                headerTintColor: Colors.grey50,
                tabBarStyle: { backgroundColor: Colors.purple200 },
                tabBarActiveTintColor: Colors.blue800,
                tabBarInactiveTintColor: Colors.grey50,
                headerRight: ({ tintColor }) => (
                    <IconButton
                        icon="bell-ring-outline"
                        size={24}
                        color={tintColor}
                        onPress={() => {
                            navigation.navigate('WelcomeScreen');
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
