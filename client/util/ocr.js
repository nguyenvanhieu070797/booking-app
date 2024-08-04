import axios from 'axios'
import {API_URL} from "@env"
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function postData(mode, data, headers = {}) {
    const token = await AsyncStorage.getItem("token");
    headers["Authorization"] = `Bearer ${token}`;
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${API_URL}/ocr/${mode}`,
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


export function uploadOCR (data, headers = {}) {
    return postData("upload", data, headers);
}
