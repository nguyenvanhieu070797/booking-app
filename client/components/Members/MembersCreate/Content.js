import {StyleSheet, ScrollView, Alert} from 'react-native';

// Form Login
import Form from "./Form";
import {createUsers} from "../../../util/users";
import {useNavigation} from "@react-navigation/native";

function Content() {
    const navigation = useNavigation();

    function goBackHandler() {
        navigation.goBack()
    }

    function submitHandler(data) {
        createUsers(data).then(({status}) => {
            if (status === 200) {
                Alert.alert(
                    "Thành công",
                    "Đăng ký người dùng thành công",
                    [{text: 'Đồng ý', style: 'destructive', onPress: goBackHandler }]
                )
            } else {
                Alert.alert("Đăng ký thành viên thất bại.");
            }
            return true;
        }).catch(err => {
            console.log({err});
        })
    }

    return (
        <ScrollView style={styles.form}>
            <Form onSubmit={submitHandler}/>
        </ScrollView>
    );
}

export default Content;

const styles = StyleSheet.create({});
