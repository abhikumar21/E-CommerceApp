import { create } from '@mui/material/styles/createTransitions';
import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    user: null,
    token: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            const {user, token} = action.payload;
            state.user = user;
            state.token = token;
        },
        clearUser: (state) => {
            state.user = null;
            state.token = null;
        }
    }
});

export const {setUser, clearUser} = authSlice.actions
export default authSlice.reducer;
