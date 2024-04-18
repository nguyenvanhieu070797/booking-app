import {ScrollView, StyleSheet} from 'react-native';
import ProductLists from "./Products/ProductLists";
import Categories from "./Categories/Categories";
import {PRODUCTS} from "../../data/prod-data"

function Content() {
    return  <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.rootContainer}
    >
        <ProductLists data={PRODUCTS}/>
        <Categories/>
    </ScrollView>
}

export default Content

const styles = StyleSheet.create({
    rootContainer: {
        paddingBottom: 15,
        flex: 1,
        paddingVertical: 7,
    }
});
