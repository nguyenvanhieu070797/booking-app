import {useState} from 'react';
import {Alert, View} from 'react-native';

// Axios
import {login} from "../util/auth";

// UI
import Loader from '../components/UI/Loader'

// Form
import AuthContent from '../components/Auth/Login/AuthContent';

// Redux
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

    return <View>
        <Loader isLoading={isAuthenticating}/>
        <AuthContent
            isLogin
            onAuthenticate={loginHandler}
        />
    </View>;
}

export default LoginScreen;
