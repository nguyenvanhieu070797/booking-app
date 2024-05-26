import {StyleSheet, ScrollView} from 'react-native'
import SideMenu from "./SideMenu";
import Information from "./Information";

function Content() {
    return <ScrollView style={styles.form}>
        <SideMenu/>
        <Information/>
    </ScrollView>
}

export default Content;

const styles = StyleSheet.create({
    form: {
        flex: 1,
    },
});
