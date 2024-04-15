import {View, Text, StyleSheet, Pressable} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import Colors from "../../constants/colors";


function IconButtonCell({
                            children,
                            onPress,
                            icon,
                            size,
                            color = "#ffffff",
                            iconBackground
}) {
    return (
        <View style={styles.container}>
            <Pressable
                style={
                    ({pressed}) => pressed
                        ? [styles.buttonInnerContainer, styles.pressed]
                        : [styles.buttonInnerContainer]
                }
                onPress={onPress}
                android_ripple={{color: Colors.lightDividers}}>
                <View style={[styles.iconContainer, {backgroundColor: iconBackground}]
                }>
                    <Ionicons
                        style={styles.icon}
                        name={icon}
                        size={size}
                        color={color}/>
                </View>
                <Text style={[styles.buttonText]}>
                    {children}
                </Text>
            </Pressable>

        </View>
    )
}

export default IconButtonCell;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        rowGap: 4,
        columnGap: 4,
    },
    buttonInnerContainer: {
        paddingVertical: 8,
        elevation: 2,
        alignItems: "center",
    },
    buttonText: {
        width: 48,
        color: Colors.darkPrimary,
        textAlign: 'center',
        fontFamily: 'open-sans-bold',
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: '400',
    },
    pressed: {
        opacity: 0.75,
    },
    iconContainer: {
        padding: 10,
        borderRadius: 30,
        marginBottom: 10,
    },
    icon: {
    }
});
