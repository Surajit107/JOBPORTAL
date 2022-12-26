import { configureStore } from "@reduxjs/toolkit";
import { BlogSlice } from "../slice/BlogsSlice";
import { ContactSlice } from "../slice/ContactSlice";
import { JobSlice } from "../slice/JobSlice";
import { PostJobSlice } from "../slice/PostJobSlice";
import AuthSlice from "../slice/AuthSlice";

export const Store = configureStore({
    reducer: {
        jobslice: JobSlice.reducer,
        blogslice: BlogSlice.reducer,
        contactslice: ContactSlice.reducer,
        postjobslice: PostJobSlice.reducer,
        authslice: AuthSlice
    }
})