import axios from 'axios'
import {API_URL} from "@env"

export async function authenticate(mode, userName, password) {
    const url = `${API_URL}/auth/login`;
    const response = await axios.post(
        url,
        {
            user_name: userName,
            password: password,
        }
    );
    return response?.data?.token || "";
}

export function createUser(userName, password) {
    return authenticate('signUp', userName, password);
}

export function login(userName, password) {
    return authenticate('signInWithPassword', userName, password);
}
