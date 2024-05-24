import axios from 'axios'
import {authenticate} from "./auth";

export async function User() {
    const url = `http://192.168.2.14:3005/admin/user`;
    return axios.get(url).then(result => {
        return result.data;
    }).catch(err => console.log(err));
}

export function  getUsers() {
    return User();
}
