import {View, Text, StyleSheet, Pressable} from "react-native";
import {Ionicons, MaterialIcons, MaterialCommunityIcons, AntDesign, FontAwesome} from "@expo/vector-icons";
import Colors from "../../constants/colors";


function IconButtonCell({
                            children,
                            onPress,
                            icon,
                            size,
                            color = "#ffffff",
                            iconBackground,
                            type = ""
}) {
    let vectorIcon = "";
    switch(type) {
        case "MaterialIcons":
            vectorIcon = <MaterialIcons
                style={styles.icon}
                name={icon}
                size={size}
                color={color}/>;
            break;
        case "MaterialCommunityIcons":
            vectorIcon = <MaterialCommunityIcons
                style={styles.icon}
                name={icon}
                size={size}
                color={color}/>;
            break;
        case "AntDesign":
            vectorIcon = <AntDesign
                style={styles.icon}
                name={icon}
                size={size}
                color={color}/>;
            break;
        case "FontAwesome":
            vectorIcon = <FontAwesome
                style={styles.icon}
                name={icon}
                size={size}
                color={color}/>;
            break;
        default:
            vectorIcon = <Ionicons
                style={styles.icon}
                name={icon}
                size={size}
                color={color}/>;
    }

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
                    {vectorIcon}
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
        paddingVertical: 4,
        elevation: 2,
        alignItems: "center",
    },
    buttonText: {
        flexWrap: 'wrap',
        color: Colors.darkPrimary,
        textAlign: 'center',
        fontFamily: 'open-sans-bold',
        fontSize: 12,
    },
    pressed: {
        opacity: 0.75,
    },
    iconContainer: {
        borderRadius: 10,
    },
    icon: {
        margin: 10,
    }
});
