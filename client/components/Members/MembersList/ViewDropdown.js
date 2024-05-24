import React  from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icons from "../../../constants/icons";

const ViewDropdown = ({show = true, data = [], onPress}) => {
    if (!show) {
        return;
    }
    return (
        <View style={[styles.dropdown]}>
            {show && data.map(option => (
                <TouchableOpacity
                    key={option.id}
                    style={styles.option}
                    onPress={() => onPress(option)}
                >
                    <Icons
                        icon={option.icon.name}
                        type={option.icon.type}
                        size={option.icon.size}
                        color={option.icon.color}
                        style={styles.icon}
                    />
                    <Text style={styles.text}>{option.text}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    dropdown: {
        minWidth: 100,
        position: "absolute",
        top: 80,
        right: 10,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        zIndex: 10,
    },
    option: {
        flexDirection: "row",
        padding: 10,
    },
    text: {
        fontSize: 16,
        fontFamily: 'open-sans',
    },
    icon: {
        marginRight: 5,
        justifyContent: "center",
        alignItems:  "center",
        lineHeight: 22
    }
});

export default ViewDropdown;
