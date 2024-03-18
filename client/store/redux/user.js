import {createSlice} from '@reduxjs/toolkit';


const userSlice = createSlice({
    name: 'user',
    initialState: {
        id: ''
    },

    reducers: {
        setUser: (state, action) => {
            state = {...state, id: action.payload.id}
            return state;
        },
        removeUser: (state) => {
            state.id = '';
        },
    }
});

export const setUser = userSlice.actions.setUser;
export const removeUser = userSlice.actions.removeUser;
export default userSlice.reducer;

