import {Text, View, Pressable, StyleSheet} from "react-native";
import Colors from "../../constants/colors";

function PrimaryButton({children, onPress, style}) {
    const styleText = style?.text || {};
    const stylePressed = style?.pressed || {};
    const styleContainer = style?.container || {};

    return (
        <View style={[styles.buttonOuterContainer, styleContainer]}>
            <Pressable
                style={
                    ({pressed}) => pressed
                        ? [styles.buttonInnerContainer, styles.pressed, stylePressed]
                        : [styles.buttonInnerContainer, stylePressed]
                }
                onPress={onPress}
                android_ripple={{color: Colors.blue200}}>
                <Text style={[styles.buttonText, styleText]}>{children}</Text>
            </Pressable>
        </View>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 16,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: Colors.blue500,
        paddingVertical: 8,
        elevation: 2,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },

    pressed: {
        opacity: 0.75,
    }
});
