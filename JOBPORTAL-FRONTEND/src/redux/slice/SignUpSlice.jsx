import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../baseUrl/common";

export const fetchSignUp = createAsyncThunk("/login", async (SignUpData) => {
    try {
        await axios.post(`${BASE_URL}:3004/login`, SignUpData)
    } catch (error) {
        console.log(error);
    }
})

const initialState = {
    signup_data: [],
    signup_status: "idle"
}

export const SignUpSlice = createSlice({
    name: "signupslice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSignUp.pending, (state) => {
            state.signup_status = "Loading..."
        })
        builder.addCase(fetchSignUp.fulfilled, (state, action) => {
            state.signup_status = "Resolved"
            state.signup_data = action.payload
        })
        builder.addCase(fetchSignUp.rejected, (state) => {
            state.signup_status = "Failed"
        })
    }
})