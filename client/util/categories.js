import axios from 'axios'

const http = "http://192.168.20.147:3000";

export async function getData() {
    const url = `${http}/admin/categories`;
    return axios.get(url).then(result => {
        return result.data;
    }).catch(err => console.log(err));
}

export async function postData(mode, data, headers = {}) {
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${http}/admin/categories/${mode}`,
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
