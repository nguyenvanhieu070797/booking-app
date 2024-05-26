import {useState} from "react";
import {StyleSheet, ScrollView, Alert} from 'react-native';

// Form Login
import Form from "./Form";

function Content() {
    const [credentialsInvalid, setCredentialsInvalid] = useState({
        userName: false,
        password: false,
        email: false,
    });

    function submitHandler(credentials) {
        let {userName, password, email} = credentials;

        userName = userName.trim();
        password = password.trim();
        email = email.trim();

        const userNameIsValid = userName.length > 0;
        const passwordIsValid = password.length > 6;
        const emailIsValid = email.length > 0;

        if (
            !userNameIsValid ||
            !passwordIsValid ||
            !emailIsValid
        ) {
            Alert.alert('Invalid input', 'Please check your entered credentials.');
            setCredentialsInvalid({
                userName: !userNameIsValid,
                password: !passwordIsValid,
                emailIsValid: !emailIsValid,
            });
        }
    }

    return (
        <ScrollView style={styles.form}>
            <Form
                onSubmit={submitHandler}
                credentialsInvalid={credentialsInvalid}
            />
        </ScrollView>
    );
}

export default Content;

const styles = StyleSheet.create({});
