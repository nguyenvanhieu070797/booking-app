import axios from 'axios'

export async function getList() {
    const url = `http://192.168.2.14:3000/admin/user`;
    return axios.get(url).then(result => {
        return result.data;
    }).catch(err => console.log(err));
}

export async function postData(mode, formData) {
    const url = `http://192.168.2.14:3000/admin/user/${mode}`;
    const response = await axios.post(
        url,
        formData
    );
    return response?.data || "";
}


export function  getUsers() {
    return getList();
}

export function createUsers(data) {
    return postData("create", data);
}
