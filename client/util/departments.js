import axios from 'axios'
import {API_URL} from '@env';

export async function getData() {
    const url = `${API_URL}/admin/department`;
    return axios.get(url).then(result => {
        return result.data;
    }).catch(err => console.log(err));
}

export async function postData(mode, data, headers = {}) {
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${API_URL}/admin/department/${mode}`,
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
