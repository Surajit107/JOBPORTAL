import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../baseUrl/common";

export const fetchContact = createAsyncThunk("/users", async (formData) => {
    try {
        await axios.post(`${BASE_URL}:3003/users`, formData)
    } catch (error) {
        console.log(error);
    }
})

const initialState = {
    form_data: [],
    form_status: "idle"
}

export const ContactSlice = createSlice({
    name: "contactslice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchContact.pending, (state) => {
            state.form_status = "Loading..."
        })
        builder.addCase(fetchContact.fulfilled, (state, action) => {
            state.form_data = action.payload
            state.form_status = "Resolved"
        })
        builder.addCase(fetchContact.rejected, (state) => {
            state.form_status = "Failed"
        })
    }
})