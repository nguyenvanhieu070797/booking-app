import {
    View,
    TextInput,
    Text,
    StyleSheet
} from 'react-native';
import Colors from "../../constants/colors";

function InputCustomLabel({label, value, name, onChange, isInvalid}) {
    const styleIsInvalid = isInvalid && styles.inputInvalid || {};
    return (
        <View style={{flex: 1}}>
            <Text style={[styles.label]}>
                {label}
            </Text>
            <TextInput
                value={value}
                onChangeText={onChange.bind(this, name)}
                style={[styles.inputText, styleIsInvalid]}
                isInvalid={isInvalid}
                blurOnSubmit
            />
        </View>
    )
}


export default InputCustomLabel;


const styles = StyleSheet.create({
    inputText: {
        flex: 1,
        alignItems: 'stretch',
        height: 36,
        fontSize: 18,
        color: Colors.greyOpacity75,
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 5,
        fontFamily: 'open-sans',
    },
    label: {
        top:  0,
        fontSize: 16,
        color: Colors.greyOpacity75,
        fontFamily: 'open-sans-bold',
    },
    inputTextFocused: {
        borderColor: Colors.blue500,
    },
    inputInvalid: {
        borderColor: Colors.red200,
    }
});