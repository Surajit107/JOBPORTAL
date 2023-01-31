import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../baseUrl/common";

// SignUp
export const fetchSignUp = createAsyncThunk("users/signup", async (SignupData) => {
    try {
        await axios.post(`${BASE_URL}:3004/users`, SignupData)
        const { navigate, toast } = SignupData
        toast.success('Successfully Registered. Please SignIn to Continue 😊');
        navigate('/signin')
    } catch (error) {
        console.log(error);
    }
})


// SignIn
export const fetchSignIn = createAsyncThunk("users/signin", async ({ formValue, navigate, toast }) => {
    try {
        let res = await axios.get(`${BASE_URL}:3004/users`)
        const { email, password } = formValue
        const user = res?.data?.filter(item => item.email === email && item.password === password)
        if (user.length) {
            toast.success('Loged In Successfully 😊');
            window.localStorage.setItem("token", JSON.stringify(true))
            window.localStorage.setItem("user", JSON.stringify(user[0]?.user))
            window.localStorage.setItem("userType", JSON.stringify(user[0]?.type))
            navigate('/')
            return user;
        } else {
            toast.error('Invalid Email or Password 😟');
        }

    } catch (error) {
        console.log(error);
    }
})


const initialState = {
    user: [],
    err: "",
    msg: ""

}

const AuthSlice = createSlice({
    name: "authslice",
    initialState,
    reducers: {
        setLogout(state) {
            state.user = []
            state.msg = "Successfully Logged Out !!"
            window.localStorage.setItem("token", false)
            window.localStorage.removeItem("user")
            window.localStorage.removeItem("userType")
        }
    },
    extraReducers: (builder) => {
        // For SignIn
        builder.addCase(fetchSignIn.pending, (state) => {
            state.msg = "Loading..."
        })
        builder.addCase(fetchSignIn.fulfilled, (state, { payload }) => {
            if (payload) {
                state.user = payload
                state.msg = "Successfully Logged In !!"
            }
        })
        builder.addCase(fetchSignIn.rejected, (state) => {
            state.err = "Invalid Email or Password !!"
        })


        // For SignUp
        builder.addCase(fetchSignUp.pending, (state) => {
            state.msg = "Loading..."
        })
        builder.addCase(fetchSignUp.fulfilled, (state) => {
            state.msg = "Successfully Registered. Please Login to Continue !!"
        })
        builder.addCase(fetchSignUp.rejected, (state) => {
            state.err = "Something Went Wrong !!"
        })

    }
})

export const { setLogout } = AuthSlice.actions
export default AuthSlice.reducer