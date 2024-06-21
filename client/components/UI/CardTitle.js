import {Text, View, StyleSheet, Dimensions} from 'react-native';
import Colors from "../../constants/colors";


function CardTitle({title = "", children, style = {}}) {

    return <View>
        <Text style={styles.titleCard}>{title}</Text>
        <View style={[styles.card, style]}>
            {children}
        </View>
    </View>
}

const deviceWidths = Dimensions.get('window').width;

export default CardTitle;

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: deviceWidths < 300 ? 4 : 7,
        marginHorizontal: deviceWidths < 300 ? 8 : 14,
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
    titleCard: {
        paddingHorizontal: 16,
        paddingVertical: 6,
        fontSize: 20,
        color: Colors.darkPrimary,
        fontFamily: 'font-bold',
    },
})
