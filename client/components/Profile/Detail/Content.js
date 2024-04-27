import {ScrollView, StyleSheet, Text} from "react-native"
import SideMenu from "./SideMenu";
import Information from "./Information";
import Footer from "./Footer";

function Content() {


    return <ScrollView style={styles.container}>
        <SideMenu />
        <Information />
        <Footer/>
    </ScrollView>
}

export default Content;

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
    }
})
