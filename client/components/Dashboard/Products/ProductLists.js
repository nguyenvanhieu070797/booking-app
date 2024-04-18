import {View, Text, StyleSheet} from "react-native"
import ProductItems from "./ProductItems";

function renderProdItem(itemData) {
    return <View key={Math.random().toString()}>
        <ProductItems dataItem={itemData}/>
    </View>;
}

function ProductLists({data}) {
    return (
        <View>
            {
                data && data.map(itemData => renderProdItem(itemData))
            }
        </View>
    )
}

export default ProductLists;
const styles = StyleSheet.create({
   container: {
   }
});
