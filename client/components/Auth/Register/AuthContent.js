import {useState} from "react";
import {StyleSheet, View, Alert} from 'react-native';
import BackgroundStart from "../../BackgroundStart";

// Form Login
import AuthForm from "./AuthForm";

function AuthContent({onAuthenticate}) {
    const [credentialsInvalid, setCredentialsInvalid] = useState({
        userName: false,
        password: false,
        confirmPassword: false,
    });

    function submitHandler(credentials) {
        let {userName, password, confirmPassword} = credentials;

        userName = userName.trim();
        password = password.trim();

        const userNameIsValid = userName.length > 0;
        const passwordIsValid = password.length > 6;
        const passwordsAreEqual = password === confirmPassword;

        if (
            !userNameIsValid ||
            !passwordIsValid ||
            !passwordsAreEqual
        ) {
            Alert.alert('Invalid input', 'Please check your entered credentials.');
            setCredentialsInvalid({
                userName: !userNameIsValid,
                password: !passwordIsValid,
                confirmPassword: !passwordIsValid || !passwordsAreEqual,
            });
            return;
        }

        onAuthenticate({userName, password});
    }

    return (
        <BackgroundStart>
            <AuthForm
                onSubmit={submitHandler}
                credentialsInvalid={credentialsInvalid}
            />
        </BackgroundStart>
    );
}

export default AuthContent;

const styles = StyleSheet.create({});
