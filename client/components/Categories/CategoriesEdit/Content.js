import {StyleSheet, ScrollView, Alert} from 'react-native';

// Form Login
import Form from "./Form";
import {deleteDepartment, updateDepartment} from "../../../util/departments";
import {useNavigation, useRoute} from "@react-navigation/native";

function Content() {
    const navigation = useNavigation();
    const route = useRoute();
    const {data, data: {department_id}} = route.params;

    function goBackHandler() {
        navigation.goBack()
    }

    function updateDataHandler(data) {
        updateDepartment(data).then(({status}) => {
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

    function deleteDataHandler() {
        deleteDepartment({department_id}).then(({status}) => {
            if (status === 200) {
                goBackHandler();
            }
        }).catch(() => {
            return false;
        });
    }

    console.log({data});

    return (
        <ScrollView style={styles.form}>
            <Form
                onUpdateData={updateDataHandler}
                onDeleteData={deleteDataHandler}
                data={data}
            />
        </ScrollView>
    );
}

export default Content;

const styles = StyleSheet.create({});