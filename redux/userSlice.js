import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getUser = createAsyncThunk('users/getUser', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/1')
    console.log("Response : ", response.data);
    return response.data
})

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: false,
        loading: false,
        error: false
    },
    // reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUser.pending, (state) => {
                console.log("Proses 1 : Pending");
                state.loading = true
            })

            .addCase(getUser.fulfilled, (state, action) => {
                console.log("Proses 2 : Fulfilled");
                state.loading = false;
                state.user = action.payload;
            })

            .addCase(getUser.rejected, (state, action) => {
                console.log("Proses 2 : Rejected");
                console.log("action.error.message : ", action.error.message);

                state.loading = false;
                state.error = action.error.message
            })
    }
})

export default userSlice.reducer