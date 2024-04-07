import { Pressable, StyleSheet, View } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

function IconButton({ mode = "default", icon, size, color, onPress }) {
    let iconButton = "";
    switch(mode) {
        case "material":
            iconButton =  <MaterialCommunityIcons name={icon} size={size} color={color} />;
            break;
        default:
            iconButton = <Ionicons name={icon} color={color} size={size} />
    }

    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => pressed && styles.pressed}
        >
            <View style={styles.buttonContainer}>
                {iconButton}
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
