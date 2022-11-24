import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../baseUrl/common";

export const fetchPostJobs = createAsyncThunk("/jobs", async (formData) => {
    try {
        await axios.post(`${BASE_URL}:3001/jobs`, formData)
    } catch (error) {
        console.log(error);
    }
})

const initialState = {
    form_status: "idle"
}

export const PostJobSlice = createSlice({
    name: "postjobslice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPostJobs.pending, (state) => {
            state.form_status = "Loading..."
        })
        builder.addCase(fetchPostJobs.fulfilled, (state) => {
            state.form_status = "Resolved"
        })
        builder.addCase(fetchPostJobs.rejected, (state) => {
            state.form_status = "Failed"
        })
    }
})