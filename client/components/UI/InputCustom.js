import {useState} from 'react';
import {
    View,
    TextInput,
    Text,
    StyleSheet
} from 'react-native';
import Colors from "../../constants/colors";

function InputCustom({label, value, name, onChange, isInvalid = true}) {
    const [isFocused, setIsFocused] = useState(false);

    function handleFocusHandler() {
        setIsFocused(true);
    }

    function handleBlurHandler() {
        setIsFocused(false);
    }

    const isHiddenLabel = !(value && !isFocused) || false;
    const styleInputFocus = isFocused && styles.inputTextFocused || {};
    const styleInputNotFocus = !isFocused && styles.inputTextNotFocused || {};
    const styleIsInvalid = isInvalid && styles.labelInvalid || {};

    return (
        <View style={{flex: 1}}>
            <Text style={[styles.label, isFocused && styles.labelFocus]}>
                {isHiddenLabel && label}
            </Text>
            <TextInput
                value={value}
                onChangeText={onChange.bind(this, name)}
                style={[styles.inputText, styleInputNotFocus, styleInputFocus, styleIsInvalid]}
                onFocus={handleFocusHandler}
                onBlur={handleBlurHandler}
                isInvalid={isInvalid}
                blurOnSubmit
            />
        </View>
    )
}


export default InputCustom;


const styles = StyleSheet.create({
    inputText: {
        flex: 1,
        alignItems: 'stretch',
        height: 45,
        width: "100%",
        fontSize: 16,
        color: Colors.greyOpacity75,
        borderWidth: 1,
        borderColor: Colors.greyOpacity75,
        borderRadius: 5,
        paddingTop: 18,
        paddingHorizontal: 6,
        fontFamily: 'open-sans',
    },
    label: {
        position: 'absolute',
        paddingHorizontal: 6,
        top: 10,
        fontSize: 18,
        color: Colors.greyOpacity75,
        fontFamily: 'open-sans',
    },
    labelFocus: {
        top:  2,
        fontSize: 14,
        color: Colors.greyOpacity75,
        fontFamily: 'open-sans-bold',
    },
    inputTextNotFocused: {
        paddingTop: 0,
        fontSize: 18,
    },
    inputTextFocused: {
        borderColor: Colors.blue500,
    },
    inputInvalid: {
        borderColor: Colors.red200,
    }
});
