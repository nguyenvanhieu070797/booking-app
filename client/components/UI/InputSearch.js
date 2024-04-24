import {View, Text, TextInput, StyleSheet} from 'react-native';
import Colors from '../../constants/colors';
import Icons from "./Icons";

function InputSearch({
                         showLabel = false,
                         placeholder = "",
                         label = "",
                         keyboardType,
                         secure,
                         onUpdateValue,
                         value,
                         isInvalid,
                         style
                     }) {

    const styleContainer = style?.container || {};
    const styleInput = style?.input || {};
    const styleLabel = style?.label || {};
    const styleIconColor = style?.icon.color || "#fff";
    const styleIcon = style?.icon || "#fff";
    const styleLabelInvalid = style?.labelInvalid || {};

    return (
        <View style={[styles.inputContainer, styleContainer]}>
            {
                showLabel &&
                <Text style={[styles.label, isInvalid && styles.labelInvalid, styleLabel, styleLabelInvalid]}>
                    {label}
                </Text>
            }

            <View style={styles.iconContainer}>
                <Icons
                    icon="search-sharp"
                    color={styleIconColor}
                    size={32}
                    style={[styles.searchIcon, styleIcon]}
                />
            </View>

            <TextInput
                placeholder={placeholder}
                style={[styles.input, isInvalid && styles.inputInvalid, styleInput]}
                // autoCapitalize={false}
                autoCapitalize="none"
                keyboardType={keyboardType}
                secureTextEntry={secure}
                onChangeText={onUpdateValue}
                value={value}
            />
        </View>
    );
}

export default InputSearch;

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
    },
    label: {
        color: 'white',
        marginBottom: 4,
    },
    labelInvalid: {
        color: Colors.red200,
    },
    input: {
        flex: 1,
        paddingVertical: 8,
        paddingHorizontal: 10,
        backgroundColor: Colors.lightPrimary,
        borderRadius: 100,
        fontSize: 16,
        paddingLeft: 45,
    },
    inputInvalid: {
        borderWidth: 2,
        borderColor: Colors.red200,
    },
    searchIcon: {
        position: "absolute",
    },
    iconContainer: {
        position: "absolute",
        zIndex: 1,
        left: 10,
        marginTop: 6,
    }
});
