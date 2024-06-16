import axios from 'axios'

const http = "http://192.168.179.81:3000";

export async function getData() {
    const url = `${http}/admin/user`;
    return axios.get(url).then(result => {
        return result.data;
    }).catch(err => console.log(err));
}

export async function postData(mode, data, headers = {}) {
    console.log({uri: `${http}/admin/user/${mode}`});
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${http}/admin/user/${mode}`,
        headers,
        data
    };

    return axios.request(config)
        .then((response) => {
             return response.data;
        })
        .catch((error) => {
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
