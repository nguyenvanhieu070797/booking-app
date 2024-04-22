import {StyleSheet} from "react-native";
import {
    FontAwesome,
    AntDesign,
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons
} from "@expo/vector-icons";

function Icons({icon, type, size, color, style}) {
    let vectorIcon = "";
    switch (type) {
        case "MaterialIcons":
            vectorIcon = <MaterialIcons
                style={[styles.icon, style]}
                name={icon}
                size={size}
                color={color}/>;
            break;
        case "MaterialCommunityIcons":
            vectorIcon = <MaterialCommunityIcons
                style={[styles.icon, style]}
                name={icon}
                size={size}
                color={color}/>;
            break;
        case "AntDesign":
            vectorIcon = <AntDesign
                style={[styles.icon, style]}
                name={icon}
                size={size}
                color={color}/>;
            break;
        case "FontAwesome":
            vectorIcon = <FontAwesome
                style={[styles.icon, style]}
                name={icon}
                size={size}
                color={color}/>;
            break;
        default:
            vectorIcon = <Ionicons
                style={[styles.icon, style]}
                name={icon}
                size={size}
                color={color}/>;
    }
    return vectorIcon;
}

export default Icons;


const styles = StyleSheet.create({
    icon: {}
});
