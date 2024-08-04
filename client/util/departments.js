import axios from 'axios'
import {API_URL} from "@env"
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getData() {
    const token = await AsyncStorage.getItem("token");
    const headers = {
        Authorization: `Bearer ${token}`
    }
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${API_URL}/admin/department`,
        headers,
    };
    return axios.request(config)
        .then(result => {
            return result.data;
        }).catch(err => console.log(err));
}

export async function postData(mode, data, headers = {}) {
    const token = await AsyncStorage.getItem("token");
    headers["Authorization"] = `Bearer ${token}`;
    const url = `${API_URL}/admin/department/${mode}`;
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url,
        headers,
        data
    };

    return axios.request(config)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
        });
}


export function getDepartment() {
    return getData();
}

export function createDepartment(data, headers = {}) {
    return postData("create", data, headers);
}

export function updateDepartment(data) {
    const {department_id} = data;
    return postData(`update/${department_id}`, data);
}

export function deleteDepartment(data) {
    return postData("delete", data);
}

