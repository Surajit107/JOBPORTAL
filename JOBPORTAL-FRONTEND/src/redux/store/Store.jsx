import { configureStore } from "@reduxjs/toolkit";
import { BlogSlice } from "../slice/BlogsSlice";
import { ContactSlice } from "../slice/ContactSlice";
import { JobSlice } from "../slice/JobSlice";
import { PostJobSlice } from "../slice/PostJobSlice";
import AuthSlice from "../slice/AuthSlice";
import { SingleBlogSlice } from "../slice/SingleBlogSlice";
import { SingleJobSlice } from "../slice/SingleJobSlice";

export const Store = configureStore({
    reducer: {
        jobslice: JobSlice.reducer,
        singlejobslice: SingleJobSlice.reducer,
        blogslice: BlogSlice.reducer,
        singleblogslice: SingleBlogSlice.reducer,
        contactslice: ContactSlice.reducer,
        postjobslice: PostJobSlice.reducer,
        authslice: AuthSlice
    }
})