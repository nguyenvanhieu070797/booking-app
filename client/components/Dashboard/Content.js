import {View, ScrollView, StyleSheet} from 'react-native';
import ProductLists from "./Products/ProductLists";
import Categories from "./Categories/Categories";
import Devices from "./Devices/DeviceLists";
import {PRODUCTS} from "../../data/prod-data"

function Content() {
    return  <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.rootContainer}
    >
        <Devices data={PRODUCTS}/>
        <ProductLists data={PRODUCTS}/>
        <Categories/>
    </ScrollView>
}

export default Content

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
    }
});
