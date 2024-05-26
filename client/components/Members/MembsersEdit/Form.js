import {useState,} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Input from "../../UI/Input";
import Colors from "../../../constants/colors";
import {useNavigation} from '@react-navigation/native'

function Form({onSubmit, credentialsInvalid}) {
    const navigation = useNavigation();
    const [enteredUserName, setEnteredUserName] = useState('test@test.com');
    const [enteredPassword, setEnteredPassword] = useState('qwertyu');

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
        </View>
    );
}

export default Form;


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
