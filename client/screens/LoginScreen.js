import {useState} from 'react';
import AuthContent from '../components/Auth/Login/AuthContent';
import {login} from "../util/auth";
import {Alert} from 'react-native';
import LoadingOverlay from '../components/UI/LoadingOverlay'
import {setToken} from "../store/redux/auth";
import {useDispatch} from 'react-redux';

function LoginScreen() {
    const [isAuthenticating, setAuthenticating] = useState(false);
    const dispatch = new useDispatch();

    async function loginHandler({userName, password}) {
        setAuthenticating(true);
        try {
            const token = await login(userName, password);
            dispatch(setToken({token: token}));
        } catch (error) {
            Alert.alert(
                "Authentication failed",
                "Could not log you in. Please check your credentials or try again later.");
            setAuthenticating(false);
        }

    }

    if (isAuthenticating) {
        return <LoadingOverlay message="Logging you ..." />
    }

    return <AuthContent
        isLogin
        onAuthenticate={loginHandler}
    />;
}

export default LoginScreen;
