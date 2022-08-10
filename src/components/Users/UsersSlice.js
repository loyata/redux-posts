import {createSlice, nanoid} from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name:'users',
    initialState: [
        {id:'0', name:'Alice'},
        {id:'1', name:'Bob'}
    ],
    reducers:{

    }
})

export const {} = usersSlice.actions;
export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;