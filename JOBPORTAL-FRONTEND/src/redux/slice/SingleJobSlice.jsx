import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import { BASE_URL } from "../../baseUrl/common";

export const fetchSingleJob = createAsyncThunk("/jobs/id", async (id) => {
    try {
        const res = await axios.get(`${BASE_URL}:3001/jobs/${id}`)
        // console.log(res?.data);
        return res?.data;
    } catch (error) {
        console.log(error);
    }
})

const initialState = {
    single_job_data: [],
    single_job_status: "idle",
    loading: false
}

export const SingleJobSlice = createSlice({
    name: "singlejobslice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSingleJob.pending, (state) => {
            state.single_job_status = "Loading..."
            state.loading = true
        })
        builder.addCase(fetchSingleJob.fulfilled, (state, action) => {
            state.single_job_status = "Resolved"
            state.single_job_data = action.payload
            state.loading = false
        })
        builder.addCase(fetchSingleJob.rejected, (state) => {
            state.single_job_status = "Failed"
            state.loading = false
        })
    }
})
