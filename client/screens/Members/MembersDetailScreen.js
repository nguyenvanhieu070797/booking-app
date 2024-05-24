import {View, StyleSheet} from "react-native";
import Header from "../../components/Devices/DevicesDetail/Header";
import Colors from "../../constants/colors";
import Content from "../../components/Devices/DevicesDetail/Content";

function MembersDetailScreen({route}) {
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

export default MembersDetailScreen;

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
