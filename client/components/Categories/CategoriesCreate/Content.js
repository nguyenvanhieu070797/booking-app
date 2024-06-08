import {StyleSheet, ScrollView,} from 'react-native';

// Form Login
import Form from "./Form";
import {createDepartment} from "../../../util/departments";

function Content() {

    function submitHandler(data) {
        return createDepartment(data).then(({status}) => {
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
