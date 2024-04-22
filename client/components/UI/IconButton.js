import {Pressable, StyleSheet, View} from 'react-native';
import Icons from "../../constants/icons";

function IconButton({mode = "default", icon, size, color, onPress, style}) {
    return (
        <Pressable
            onPress={onPress}
            style={({pressed}) => pressed && styles.pressed}
        >
            <View style={[styles.buttonContainer, style]}>
                <Icons
                    icon={icon}
                    color={color}
                    type={mode}
                    size={size}
                />
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
