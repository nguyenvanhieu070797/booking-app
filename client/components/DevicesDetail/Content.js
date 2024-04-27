import {ScrollView, StyleSheet} from "react-native"
import Information from "./Information";
import Total from "./Total";
import SideMenu from "./SideMenu";

function Content() {


    return <ScrollView style={styles.container}>
        <SideMenu/>
        <Information/>
        <Total/>
    </ScrollView>
}

export default Content;

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
    }
})
