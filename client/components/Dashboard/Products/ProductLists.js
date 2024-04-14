import {View, StyleSheet} from "react-native"
import ProductItems from "./ProductItems";

function ProductLists() {
    return <View style={styles.container}>
        <ProductItems/>
        <ProductItems/>
        <ProductItems/>
        <ProductItems/>
        <ProductItems/>
        <ProductItems/>
        <ProductItems/>
        <ProductItems/>
        <ProductItems/>
        <ProductItems/>
        <ProductItems/>
    </View>
}

export default ProductLists;
const styles = StyleSheet.create({
   container: {
       paddingVertical: 15,
   }
});
