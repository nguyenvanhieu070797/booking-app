import {View, Text, StyleSheet} from "react-native"
import DeviceItems from "./DeviceItems";
import Colors from "../../../constants/colors";

function renderProdItem(itemData) {
    return <View key={Math.random().toString()}>
        <DeviceItems dataItem={itemData}/>
    </View>;
}

function DeviceLists({data, title}) {
    return (
        <View>
            <Text style={styles.title}>
                {title}
            </Text>
            {
                data && data.map(itemData => renderProdItem(itemData))
            }
        </View>
    )
}

export default DeviceLists;
const styles = StyleSheet.create({
   title: {
       paddingHorizontal: 16,
       paddingVertical: 6,
       fontSize: 20,
       color: Colors.darkPrimary,
       fontFamily: 'open-sans-bold',
   }
});
