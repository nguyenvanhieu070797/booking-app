import {StyleSheet, ScrollView,} from 'react-native';

// Form Login
import Form from "./Form";
import {createUsers} from "../../../util/users";

function Content() {

    function submitHandler(data) {
        return createUsers(data).then(({status}) => {
            return status === 200;
        }).catch(err => {
            console.log({err});
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
