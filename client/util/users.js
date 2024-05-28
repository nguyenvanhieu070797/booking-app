import axios from 'axios'

const http = "http://192.168.2.14:3000";

export async function getList() {
    const url = `${http}/admin/user`;
    return axios.get(url).then(result => {
        return result.data;
    }).catch(err => console.log(err));
}

export async function postData(mode, data, headers = {}) {
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
            console.log(error);
        });
}


export function getUsers() {
    return getList();
}

export function createUsers(data, headers = {}) {
    return postData("create", data, headers);
}

export function updateUsers(data) {
    const {user_id} = data;
    return postData(`update/${user_id}`, data);
}
