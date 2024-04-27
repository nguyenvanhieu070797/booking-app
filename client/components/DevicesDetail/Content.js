import {ScrollView, StyleSheet} from "react-native"
import DevicesInformation from "./DevicesInformation";
import DevicesTotal from "./DevicesTotal";
import DevicesSideMenu from "./DevicesSideMenu";

function Content() {


    return <ScrollView style={styles.container}>
        <DevicesSideMenu/>
        <DevicesInformation/>
        <DevicesTotal/>
    </ScrollView>
}

export default Content;

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
    }
})
