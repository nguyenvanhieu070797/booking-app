import {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native';
import BackgroundStart from "../components/BackgroundStart";
import PrimaryButton from "../components/ui/PrimaryButton";
import Input from "../components/ui/Input"
import Colors from "../constants/colors"

function LoginScreen({navigation}) {
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');

    function registerScreenHandler() {
        navigation.navigate('RegisterScreen');
    }

    function loginScreenHandler() {
        navigation.navigate('PrizeWheelScreen');
    }

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

    return (
        <BackgroundStart>
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
                        Đăng Nhập
                    </PrimaryButton>
                    <Text
                        style={styles.contentRegister}
                        onPress={registerScreenHandler}
                    >
                        Chưa có tài khoản? <Text style={{color: Colors.blue500}}>Đăng ký</Text>
                    </Text>
                </View>

            </View>
        </BackgroundStart>
    );
}

export default LoginScreen;

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
        fontWeight: 'bold',
        fontSize: 14,
        fontFamily: 'open-sans',
        marginTop: 5,
        paddingTop: 5,
        paddingBottom: 5,
    }
});
