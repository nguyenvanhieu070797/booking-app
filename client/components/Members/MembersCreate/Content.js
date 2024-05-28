import {StyleSheet, ScrollView,} from 'react-native';

// Form Login
import Form from "./Form";
import {createUsers} from "../../../util/users";

function Content() {

    function submitHandler(data) {
        let formData = new FormData();
        const headers =  {  'Content-Type': 'multipart/form-data', };
        Object.keys(data).forEach((key) => {
            formData.append(key, data[key]);
        });

        return createUsers(formData, headers).then(({status}) => {
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
