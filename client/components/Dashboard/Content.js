import {View, StyleSheet} from 'react-native';
import ProductLists from "./Products/ProductLists";
import Categories from "./Categories/Categories";

function Content() {
    return <View>
       <ProductLists/>
       <Categories/>
    </View>
}

export default Content

const styles = StyleSheet.create({

});
