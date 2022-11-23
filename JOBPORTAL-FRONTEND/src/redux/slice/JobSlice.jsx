import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../baseUrl/common";

// Fetching All Jobs 
export const fetchAllJobs = createAsyncThunk("/jobs", async () => {
    try {
        const res = await axios.get(`${BASE_URL}:3001/jobs`)
        // console.log(res?.data);
        return res?.data
    } catch (error) {
        console.log(error);
    }
})


const initialState = {
    fetch_job_data: [],
    fetch_job_status: "idle",
    loading: false
}

export const JobSlice = createSlice({
    name: "jobslice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // For All Jobs 
        builder.addCase(fetchAllJobs.pending, (state) => {
            state.fetch_job_status = "Loading..."
            state.loading = true
        })
        builder.addCase(fetchAllJobs.fulfilled, (state, action) => {
            state.fetch_job_status = "Resolved"
            state.fetch_job_data = action.payload
            state.loading = false
        })
        builder.addCase(fetchAllJobs.rejected, (state) => {
            state.fetch_job_status = "Failed"
            state.loading = false
        })
    }
})