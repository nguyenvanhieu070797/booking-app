import axios from 'axios'
import AsyncStorage from "@react-native-async-storage/async-storage";
import {API_URL} from "@env"

export async function getData() {
    const token = await AsyncStorage.getItem("token");
    const headers = {
        Authorization: `Bearer ${token}`
    }
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${API_URL}/admin/category`,
        headers,
    };
    return axios.request(config)
        .then(result => {
            return result.data;
        }).catch(err => console.log(err));
}

export async function postData(mode, data, headers = {}) {
    const url = `${API_URL}/admin/category/${mode}`;
    const token = await AsyncStorage.getItem("token");
    headers["Authorization"] = `Bearer ${token}`;
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url,
        headers,
        data
    };

    return axios.request(config).then(result => {
        return result.data;
    }).catch(err => console.log(err)).then((response) => {
        return response.data;
    }).catch((error) => {
        console.log(error);
    });
}


export function getCategories() {
    return getData();
}

export function createCategories(data, headers = {}) {
    return postData("create", data, headers);
}

export function updateCategories(data) {
    const {Categories_id} = data;
    return postData(`update/${Categories_id}`, data);
}

export function deleteCategories(data) {
    return postData("delete", data);
}

