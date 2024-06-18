import axios from 'axios'
import {API_URL} from '@env';

export async function getData() {
    const url = `${API_URL}/admin/categories`;
    return axios.get(url).then(result => {
        return result.data;
    }).catch(err => console.log(err));
}

export async function postData(mode, data, headers = {}) {
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${API_URL}/admin/categories/${mode}`,
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
