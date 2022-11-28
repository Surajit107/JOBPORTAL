import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../baseUrl/common";

// Blog Content
export const fetchAllBlogs = createAsyncThunk("/blog", async () => {
    try {
        const res = await axios.get(`${BASE_URL}:3002/blog`)
        return res?.data
    } catch (error) {
        console.log(error);
    }
})


const initialState = {
    blog_data: [],
    blog_status: "idle",
    loading: false
}

export const BlogSlice = createSlice({
    name: "blogslice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Action for all Blogs
        builder.addCase(fetchAllBlogs.pending, (state) => {
            state.blog_status = "Loading..."
            state.loading = true
        })
        builder.addCase(fetchAllBlogs.fulfilled, (state, action) => {
            state.blog_status = "Resolved"
            state.blog_data = action.payload
            state.loading = false
        })
        builder.addCase(fetchAllBlogs.rejected, (state) => {
            state.blog_status = "Failed"
            state.loading = false
        })
    }
})