
import {View, StyleSheet} from "react-native";
import Header from "../../components/Members/MembsersEdit/Header";
import Colors from "../../constants/colors";
import Content from "../../components/Members/MembsersEdit/Content";

function CategoriesDevicesDetailScreen({route}) {
    const { data } = route.params;
    return (
        <View style={styles.rootContainer}>
            <View style={styles.header}>
                <Header/>
            </View>
            <Content data={data}/>
        </View>
    )
}

export default CategoriesDevicesDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flexDirection: "column",
        flex: 1,
    },
    header: {
        backgroundColor: Colors.blue400,
        paddingTop: 42,
    }
});
