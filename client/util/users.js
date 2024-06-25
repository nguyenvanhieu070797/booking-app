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
        url: `${API_URL}/admin/user`,
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
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${API_URL}/admin/user/${mode}`,
        headers,
        data
    };
    return axios.request(config)
        .then((response) => {
             return response.data;
        })
        .catch((error) => {
            console.log({error});
            return false;
        });
}


export function getUsers() {
    return getData();
}

export function createUsers(data, headers = {}) {
    return postData("create", data, headers);
}

export function updateUsers(user_id, data, headers) {
    return postData(`update/${user_id}`, data, headers);
}

export function deleteUser(data) {
    return postData("delete", data);
}
