import {View, StyleSheet, Dimensions} from 'react-native';
import Colors from "../../constants/colors";


function Card ({children}) {
    return  <View style={styles.card}>
        {children}
    </View>
}

const deviceWidths = Dimensions.get('window').width;

export default Card;

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: deviceWidths < 300 ? 8: 14,
        marginHorizontal: 14,
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
