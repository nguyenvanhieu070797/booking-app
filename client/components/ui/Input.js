import {View, Text, TextInput, StyleSheet} from 'react-native';
import Colors from '../../constants/colors';

function Input({
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
    const styleLabelInvalid = style?.labelInvalid || {};

    return (
        <View style={[styles.inputContainer, styleContainer]}>
            {
                showLabel && <Text style={[styles.label, isInvalid && styles.labelInvalid, styleLabel, styleLabelInvalid]}>
                    {label}
                </Text>
            }
            <TextInput
                placeholder={placeholder}
                style={[styles.input, isInvalid && styles.inputInvalid, styleInput]}
                autoCapitalize={false}
                autoCapitalize="none"
                keyboardType={keyboardType}
                secureTextEntry={secure}
                onChangeText={onUpdateValue}
                value={value}
            />
        </View>
    );
}

export default Input;

const styles = StyleSheet.create({
    inputContainer: {
        marginVertical: 8,
    },
    label: {
        color: 'white',
        marginBottom: 4,
    },
    labelInvalid: {
        color: Colors.red500,
    },
    input: {
        paddingVertical: 8,
        paddingHorizontal: 10,
        backgroundColor: Colors.lightPrimary,
        borderRadius: 100,
        fontSize: 16,
    },
    inputInvalid: {
        backgroundColor: Colors.red500,
    },
});
