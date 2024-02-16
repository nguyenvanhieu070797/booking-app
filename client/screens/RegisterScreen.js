import {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native';
import BackgroundStart from "../components/BackgroundStart";
import PrimaryButton from "../components/ui/PrimaryButton";
import Input from "../components/ui/Input"
import Colors from "../constants/colors"

function RegisterScreen({navigation}) {
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('');


    function loginScreenHandler() {
        navigation.navigate('LoginScreen');
    }

    function updateInputValueHandler(inputType, enteredValue) {
        switch (inputType) {
            case 'userName':
                setEnteredUserName(enteredValue);
                break;
            case 'email':
                setEnteredEmail(enteredValue);
                break;
            case 'password':
                setEnteredPassword(enteredValue);
                break;
            case 'confirmPassword':
                setEnteredConfirmPassword(enteredValue);
                break;
        }
    }

    return (
        <BackgroundStart>
            <View style={styles.rootContainer}>
                <View style={styles.container}>
                    <Text style={styles.titleWelcome}>
                        Đăng Ký Tài Khoản
                    </Text>
                </View>


                <View style={styles.formContainer}>
                    <Input
                        placeholder="Nhập tên tài khoản"
                        onUpdateValue={updateInputValueHandler.bind(this, 'userName')}
                        value={enteredUserName}
                        isInvalid={false}
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
                        placeholder="Nhập email"
                        onUpdateValue={updateInputValueHandler.bind(this, 'email')}
                        value={enteredEmail}
                        keyboardType="email-address"
                        isInvalid={false}
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
                        isInvalid={false}
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
                        placeholder="Nhập lại mật khẩu"
                        onUpdateValue={updateInputValueHandler.bind(this, 'confirmPassword')}
                        value={enteredConfirmPassword}
                        isInvalid={false}
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
                        onPress={loginScreenHandler}
                        style={{
                            text: {
                                fontSize: 18,
                                fontFamily: 'open-sans',
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
                        Đăng Ký
                    </PrimaryButton>

                    <Text
                        style={styles.contentRegister}
                        onPress={loginScreenHandler}
                    >
                        Đã tài khoản? <Text style={{color: Colors.blue500}}>Đăng nhập</Text>
                    </Text>
                </View>

            </View>
        </BackgroundStart>
    );
}

export default RegisterScreen;

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
        fontFamily: 'open-sans',
    },
    contentWelcome: {
        textAlign: "center",
        fontFamily: 'open-sans',
    },
    contentRegister: {
        fontSize: 14,
        fontFamily: 'open-sans',
        marginTop: 5,
        paddingTop: 5,
        paddingBottom: 5,
    }
});
