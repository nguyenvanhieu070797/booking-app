import axios from 'axios'

const API_KEY = 'AIzaSyAWuIqeTDxI8RQNRt749moZWoFZyEUx5R4';

export async function authenticate(mode, userName, password) {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

    const response = await axios.post(
        url,
        {
            email: userName,
            password: password,
            returnSecureToken: true
        }
    );

    return response?.data?.idToken || "";
}

export function createUser(userName, password) {
    return authenticate('signUp', userName, password);
}

export function login(userName, password) {
    return authenticate('signInWithPassword', userName, password);
}
