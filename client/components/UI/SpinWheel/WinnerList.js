import {View, FlatList, Text, StyleSheet} from 'react-native';
import Card from "../Card";
import Colors from "../../../constants/colors";
import {useEffect} from 'react';


function renderWinnerItem(itemData) {
    return <View>
        <Card style={styles.rankCard}>
            <View style={styles.rankContainer}>
                <Text style={styles.textRank}>
                    {itemData.item.index.toString()}
                </Text>
                <Text style={styles.textName}>
                    {itemData.item.value.toString()}
                </Text>
            </View>
        </Card>
    </View>

}

function WinnerList({data}) {
    useEffect(() => {
        console.log("SpinWheelScreen Use", {data});
    }, [data]);

    if (data.length === 0) {
        return "";
    }

    return <View>
        <FlatList
            data={data}
            renderItem={renderWinnerItem}
            keyExtrator={item => item.index}
        />
    </View>
}

export default WinnerList;


const styles = StyleSheet.create({
    rankCard: {
        justifyContent: 'left',
        alignItems: 'left',
        marginTop: 5,
        marginBottom: 5
    },
    textRank: {
        marginRight: 20,
        fontWeight: 'bold',
        fontSize: 24,
        color: Colors.blue500,
        fontFamily: 'open-sans-bold',
    },
    textName: {
        fontSize: 24,
        color: Colors.blue500,
        fontFamily: 'open-sans-bold',
    }
})
