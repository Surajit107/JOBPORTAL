import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../baseUrl/common";

export const fetchSingleBlog = createAsyncThunk("/blog/id", async (id) => {
    try {
        const res = await axios.get(`${BASE_URL}:3002/blog/${id}`)
        return res?.data
    } catch (error) {
        console.log(error);
    }
})

const initialState = {
    single_blog_data: [],
    single_blog_status: "idle",
    loading: false
}

export const SingleBlogSlice = createSlice({
    name: "singleblogslice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSingleBlog.pending, (state) => {
            state.single_blog_status = "Loading.."
            state.loading = true
        })
        builder.addCase(fetchSingleBlog.fulfilled, (state, { payload }) => {
            state.single_blog_status = "Resolved"
            state.single_blog_data = payload
            state.loading = false
        })
        builder.addCase(fetchSingleBlog.rejected, (state) => {
            state.single_blog_status = "Failed"
            state.loading = false
        })
    }
})
