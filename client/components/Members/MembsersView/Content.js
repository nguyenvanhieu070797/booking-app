import {StyleSheet, ScrollView, Alert} from 'react-native';

// Form Login
import Form from "./Form";
import {updateUsers} from "../../../util/users";
import {useNavigation, useRoute} from "@react-navigation/native";

function Content() {
    const navigation = useNavigation();
    const route = useRoute();
    const {data} = route.params;

    function goBackHandler() {
        navigation.goBack()
    }

    function submitHandler(data) {
        updateUsers(data).then(({status}) => {
            if (status === 200) {
                Alert.alert(
                    "Thành công",
                    "Cập nhập thành công",
                    [{text: 'Đồng ý', style: 'destructive', onPress: goBackHandler }]
                )
            } else {
                Alert.alert("Cập nhập thất bại.");
            }
            return true;
        }).catch(err => {
            console.log({err});
        })
    }

    return (
        <ScrollView style={styles.form}>
            <Form onSubmit={submitHandler} data={data}/>
        </ScrollView>
    );
}

export default Content;

const styles = StyleSheet.create({});
