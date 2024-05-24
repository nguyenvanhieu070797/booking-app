import React  from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const ButtonDropdown = ({show = true}) => {
    if (!show) {
        return;
    }
    const options = ['HTML', 'CSS', 'JavaScript', 'React JS', 'Angular'];

    const handleOptionSelect = (option) => {
        console.log(option);
    };

    return (
        <View style={[styles.dropdown]}>
            {show && options.map(option => (
                <TouchableOpacity
                    key={option}
                    style={styles.option}
                    onPress={() => handleOptionSelect(option)}
                >
                    <Text>{option}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
    },
    dropdownButton: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    dropdownButtonText: {
        fontSize: 16,
    },
    dropdown: {
        minWidth: 100,
        position: "absolute",
        top: 78,
        right: 10,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        zIndex: 10000,
    },
    option: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});

export default ButtonDropdown;
