import {View, Text, StyleSheet} from "react-native"
import DeviceItems from "./DeviceItems";

function renderProdItem(itemData) {
    return <View key={Math.random().toString()}>
        <DeviceItems dataItem={itemData}/>
    </View>;
}

function DeviceLists({data}) {
    return (
        <View>
            {
                data && data.map(itemData => renderProdItem(itemData))
            }
        </View>
    )
}

export default DeviceLists;
const styles = StyleSheet.create({
   container: {
   }
});
