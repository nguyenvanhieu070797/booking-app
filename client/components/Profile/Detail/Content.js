import {ScrollView, StyleSheet, Text} from "react-native"
import SideMenu from "./SideMenu";
import Information from "./Information";

function Content() {


    return <ScrollView style={styles.container}>
        <SideMenu />
        <Information />
    </ScrollView>
}

export default Content;

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
    }
})
