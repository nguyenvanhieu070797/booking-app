import axios from 'axios'
import {authenticate} from "./auth";

export async function User() {
    const url = `http://192.168.147.81:3000/admin/user`;
    return axios.get(url).then(result => {
        return result.data;
    }).catch(err => console.log(err));
}

export function  getUsers() {
    return User();
}
