import {StyleSheet, ScrollView} from 'react-native'
import SideMenu from "./SideMenu";

function Content() {
    return <ScrollView style={styles.form}>
        <SideMenu/>
    </ScrollView>
}

export default Content;

const styles = StyleSheet.create({
    form: {
        flex: 1,
    },
});
