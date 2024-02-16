import { View, Text, StyleSheet } from 'react-native';
import BackgroundStart from "../components/BackgroundStart";

function WelcomeScreen() {
  return (
      <BackgroundStart>
        <View style={styles.rootContainer}>
          <Text>
            Hello
          </Text>
        </View>
      </BackgroundStart>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
