import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {store} from "../../store/redux/store";

// Redux
import {Provider} from 'react-redux';

const Stack = createNativeStackNavigator();

function Navigation ({navigationOptions}) {
    const screens = navigationOptions?.screens || [];
    return (
        <Provider store={store}>
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
        </Provider>
    )
}

export default Navigation;
