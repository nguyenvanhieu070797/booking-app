import {createSlice} from '@reduxjs/toolkit';


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: "",
        isAuthenticated: false,
    },

    reducers: {
        setToken: (state, action) => {
            state = {
                ...state,
                token: action.payload.token,
                isAuthenticated: !!action.payload.token,
            }
            return state;
        },
        removeToken: (state) => {
            state = {
                ...state,
                token: "",
                isAuthenticated: false,
            }
            return state;
        },
    }
});

export const setToken = authSlice.actions.setToken;
export const removeToken = authSlice.actions.removeToken;
export default authSlice.reducer;

