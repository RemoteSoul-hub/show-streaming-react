import { createSlice } from '@reduxjs/toolkit';

/* When the app launches, use these initial values*/
const initialState = {
    name: '',
    email: '',
    photo: '',
};


/* When the user logs in, use this data*/
const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers: {
        setUserLoginDetails: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.photo = action.payload.photo;
        },

        /* When user logs out, data becomes null*/ 
        setSignOutState: state => {
            state.name = null;
            state.email = null;
            state.photo = null;
        },
    },
});

export const { setUserLoginDetails, setSignOutState } = userSlice.actions;

export const selectUserName = state => state.user.name;
export const selectUserEmail = state => state.user.email;
export const selectUserPhoto = state => state.user.photo;

export default userSlice.reducer;