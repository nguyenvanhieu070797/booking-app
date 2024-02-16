import {View, Text, StyleSheet} from 'react-native';
import BackgroundStart from "../components/BackgroundStart";
import PrimaryButton from "../components/ui/PrimaryButton";

function LoginScreen({navigation}) {

    function startScreen() {
        console.log("hello");
    }

    return (
        <BackgroundStart>
            <View style={styles.rootContainer}>
                <View style={styles.container}>
                    <Text style={styles.titleWelcome}>
                        Đăng nhập
                    </Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.contentWelcome}>
                        Bài tập về nhà dễ dàng là hạt đậu mềm. Nhà phát triển thông minh trong Internet cuộc sống.
                    </Text>
                </View>

                <View style={styles.container}>
                    <PrimaryButton
                        onPress={startScreen}
                        style={{
                            text: {
                                fontSize: 18,
                                fontFamily: 'open-sans',
                            },
                            container: {
                                borderRadius: 6,
                                margin: 10,
                                width: 246,
                            },
                            pressed: {
                                paddingVertical: 14,
                            }
                        }}
                    >
                        Đăng Ký
                    </PrimaryButton>
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
    titleWelcome: {
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'open-sans',
    },
    contentWelcome: {
        textAlign: "center",
        fontFamily: 'open-sans',
    }
});
