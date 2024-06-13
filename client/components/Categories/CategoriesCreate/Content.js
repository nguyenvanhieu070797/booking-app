import {StyleSheet, ScrollView,} from 'react-native';

// Form Login
import Form from "./Form";
import {createCategories} from "../../../util/categories";

function Content() {

    function submitHandler(data) {
        return createCategories(data).then(({status}) => {
            return status === 200;
        }).catch(err => {
            return false;
        })
    }

    return (
        <ScrollView style={styles.form}>
            <Form onSubmit={submitHandler}/>
        </ScrollView>
    );
}

export default Content;

const styles = StyleSheet.create({});
