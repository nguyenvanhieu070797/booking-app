import {useEffect, useCallback, useState} from 'react';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView } from 'react-native';

// Size Bar
import { StatusBar } from 'expo-status-bar';

// Set Linear Gradient
import { LinearGradient } from 'expo-linear-gradient';
import Colors from './constants/colors';

// Set font
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();

// Screens
import Navigation from "./components/route/Navigation";
import WelcomeScreen from "./screens/WelcomeScreen";

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
    return <View>
      <Text>
        Loading...
      </Text>
    </View>;
  }

  let navigationOptions = {
    initialRouteName: "Welcome",
    screenOptions: {
      headerShown: false,
    },
    screens: [
      {
        name: "Welcome",
        component:  WelcomeScreen,
        options: {
          headerShown: false,
          title: 'Xin chào',
        }
      }
    ]
  };

  return (
    <>
      <StatusBar style="dark"/>
      <LinearGradient
          colors={[Colors.darkDividers, Colors.darkDividers]}
          resizeMode="cover"
          style={styles.rootScreen}
          onLayout={onLayoutRootView}
      >
          <Navigation
              navigationOptions={navigationOptions}
          />
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
