import {useState,} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Input from "../../UI/Input";
import Colors from "../../../constants/colors";
import PrimaryButton from "../../UI/PrimaryButton";
import {useNavigation} from '@react-navigation/native'

function AuthForm({onSubmit, credentialsInvalid}) {
    const navigation = useNavigation();
    const [enteredUserName, setEnteredUserName] = useState('n-hieu');
    const [enteredPassword, setEnteredPassword] = useState('admin123');

    const {
        userName: userNameIsInvalid,
        password: passwordIsInvalid,
    } = credentialsInvalid;

    function updateInputValueHandler(inputType, enteredValue) {
        switch (inputType) {
            case 'userName':
                setEnteredUserName(enteredValue);
                break;
            case 'password':
                setEnteredPassword(enteredValue);
                break;
        }
    }

    function submitHandler() {
        onSubmit({
            userName: enteredUserName,
            password: enteredPassword,
        });
    }

    function switchRegisterHandler() {
        navigation.replace('RegisterScreen');
    }

    return (
        <View style={styles.rootContainer}>
            <View style={styles.container}>
                <Text style={styles.titleWelcome}>
                    Đăng Nhập
                </Text>
            </View>


            <View style={styles.formContainer}>
                <Input
                    placeholder="Nhập tên tài khoản"
                    onUpdateValue={updateInputValueHandler.bind(this, 'userName')}
                    value={enteredUserName}
                    isInvalid={userNameIsInvalid}
                    style={{
                        input: {
                            paddingHorizontal: 15,
                        },
                        label: {
                            color: Colors.grey700,
                        }
                    }}
                />

                <Input
                    placeholder="Nhập mật khẩu"
                    onUpdateValue={updateInputValueHandler.bind(this, 'password')}
                    value={enteredPassword}
                    isInvalid={passwordIsInvalid}
                    style={{
                        input: {
                            paddingHorizontal: 15,
                        },
                        label: {
                            color: Colors.grey700,
                        }
                    }}
                />
            </View>

            <View style={styles.container}>
                <PrimaryButton
                    onPress={submitHandler}
                    style={{
                        text: {
                            fontSize: 18,
                            fontFamily: 'font-regular',
                        },
                        container: {
                            borderRadius: 6,
                            margin: 0,
                            width: 246,
                        },
                        pressed: {
                            paddingVertical: 14,
                        }
                    }}
                >
                    Đăng Nhập
                </PrimaryButton>
                <Text
                    style={styles.contentRegister}
                    onPress={switchRegisterHandler}
                >
                    Chưa có tài khoản? <Text style={{color: Colors.blue500}}>Đăng ký</Text>
                </Text>
            </View>
        </View>
    );
}

export default AuthForm;


const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 24,
    },
    container: {
        margin: 5
    },
    formContainer: {
        margin: 5,
        width: 325,
    },
    titleWelcome: {
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'font-regular',
    },
    contentWelcome: {
        textAlign: "center",
        fontFamily: 'font-regular',
    },
    contentRegister: {
        fontWeight: 'bold',
        fontSize: 14,
        fontFamily: 'font-regular',
        marginTop: 5,
        paddingTop: 5,
        paddingBottom: 5,
    }
});
