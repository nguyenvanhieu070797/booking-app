import {View, StyleSheet, Dimensions} from 'react-native';
import Colors from "../../constants/colors";


function Card ({children, style}) {
    return  <View style={[styles.card, style]}>
        {children}
    </View>
}

const deviceWidths = Dimensions.get('window').width;

export default Card;

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: deviceWidths < 300 ? 4: 7,
        marginHorizontal: deviceWidths < 300 ? 8: 14,
        padding: 16,
        backgroundColor: Colors.grey50,
        borderRadius: 6,
        elevation: 4,
        shadowColor: Colors.grey500,
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowRadius: 6,
        shadowOpacity: 0.2,
    },
})
