import {View, StyleSheet} from "react-native"
import ProductItems from "./ProductItems";

function ProductLists() {
    return <View style={styles.container}>
        <ProductItems/>
    </View>
}

export default ProductLists;
const styles = StyleSheet.create({
   container: {
       paddingBottom: 15,
   }
});
