import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../baseUrl/common";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// SignUp
export const fetchSignUp = createAsyncThunk("users/signup", async (SignUpData) => {
    try {
        await axios.post(`${BASE_URL}:3004/users`, SignUpData)
    } catch (error) {
        console.log(error);
    }
})


// SignIn
export const fetchSignIn = createAsyncThunk("users/signin", async ({ email, password }) => {
    try {
        let res = await axios.get(`${BASE_URL}:3004/users`)
        const user = res?.data?.filter(item => item.email === email && item.password === password)
        if (user.length) {
            toast.success('Loged In Successfully 😊', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            return user;
        } else {
            toast.error('Invalid Email or Password 😟', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }

    } catch (error) {
        console.log(error);
    }
})


const initialState = {
    user: [],
    err: "",
    msg: "",
    token: false

}

const AuthSlice = createSlice({
    name: "authslice",
    initialState,
    reducers: {
        setLogout(state) {
            state.token = false
            state.user = []
        }
    },
    extraReducers: (builder) => {
        // For SignIn
        builder.addCase(fetchSignIn.pending, (state) => {
            state.msg = "Loading..."
        })
        builder.addCase(fetchSignIn.rejected, (state) => {
            state.err = "Invalid Email or Password !!"
        })
        builder.addCase(fetchSignIn.fulfilled, (state, { payload }) => {
            if (payload) {
                state.token = true
                state.user = payload
                state.msg = "Successfully Logged In !!"
            }
        })


        // For SignUp
        builder.addCase(fetchSignUp.pending, (state) => {
            state.msg = "Loading..."
        })
        builder.addCase(fetchSignUp.rejected, (state) => {
            state.err = "Something Went Wrong !!"
        })
        builder.addCase(fetchSignUp.fulfilled, (state) => {
            state.msg = "Successfully Registered. Please Login to Continue !!"
        })

    }
})

export const { setLogout } = AuthSlice.actions
export default AuthSlice.reducer