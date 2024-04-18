import {View, FlatList, StyleSheet} from "react-native"
import ProductItems from "./ProductItems";

function renderProdItem(itemData) {
    return <View key={itemData.id}>
        <ProductItems data={itemData.item}/>
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
