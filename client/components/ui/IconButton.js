import { Pressable, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function IconButton({ icon, size, color, onPress }) {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => pressed && styles.pressed}
        >
            <View style={styles.buttonContainer}>
                <MaterialCommunityIcons name={icon} size={size} color={color} />
            </View>
        </Pressable>
    );
}

export default IconButton;

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 24,
        padding: 6,
        marginHorizontal: 8,
        marginVertical: 2
    },
    pressed: {
        opacity: 0.75,
    },
});
