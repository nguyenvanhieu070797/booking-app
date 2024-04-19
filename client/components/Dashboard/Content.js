import {ScrollView, StyleSheet} from 'react-native';
import Categories from "./Categories/Categories";
import Devices from "./Devices/DeviceLists";
import {PRODUCTS} from "../../data/prod-data"
import OthersLists from "./Others/OthersLists";

function Content() {
    return  <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.rootContainer}
    >
        <Categories/>
        <Devices data={PRODUCTS} title="Thiết bị"/>
        <OthersLists/>
    </ScrollView>
}

export default Content

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
    }
});
