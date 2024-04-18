import {View, FlatList, StyleSheet} from "react-native"
import ProductItems from "./ProductItems";

function renderProdItem(itemData) {
    return <ProductItems data={itemData.item}/>
}

function ProductLists({data}) {
    return (
        <View>
            <FlatList
                data={data}
                renderItem={renderProdItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default ProductLists;
const styles = StyleSheet.create({
   container: {
   }
});
