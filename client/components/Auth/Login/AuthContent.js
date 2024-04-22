import {useState} from "react";
import {StyleSheet, View, Alert} from 'react-native';
import BackgroundStart from "../../BackgroundStart";

// Form Login
import AuthForm from "./AuthForm";

function AuthContent({onAuthenticate}) {
    const [credentialsInvalid, setCredentialsInvalid] = useState({
        userName: false,
        password: false,
    });

    function submitHandler(credentials) {
        let {userName, password} = credentials;

        userName = userName.trim();
        password = password.trim();

        const userNameIsValid = userName.length > 0;
        const passwordIsValid = password.length > 6;

        if (
            !userNameIsValid ||
            !passwordIsValid
        ) {
            Alert.alert('Invalid input', 'Please check your entered credentials.');
            setCredentialsInvalid({
                userName: !userNameIsValid,
                password: !passwordIsValid,
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
