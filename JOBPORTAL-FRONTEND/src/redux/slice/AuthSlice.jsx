import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../baseUrl/common";

// SignUp
export const fetchSignUp = createAsyncThunk("users/signup", async (SignupData) => {
    try {
        await axios.post(`${BASE_URL}:3004/users`, SignupData)
        const { navigate } = SignupData
        alert('Successfully Registered. Please SignIn to Continue 😊')
        // toast.success('Successfully Registered. Please SignIn to Continue 😊');
        navigate('/signin')
    } catch (error) {
        const { toast } = SignupData
        console.log(error);
        toast.success('Successfully Registered. Please SignIn to Continue 😊');
    }
})


// SignIn
export const fetchSignIn = createAsyncThunk("users/signin", async ({ formValue, navigate, toast }) => {
    try {
        let res = await axios.get(`${BASE_URL}:3004/users`)
        const { email, password } = formValue
        const user = res?.data?.filter(item => item.email === email && item.password === password)
        if (user.length) {
            alert('Loged In Successfully 😊')
            // toast.success('Loged In Successfully 😊');
            navigate('/')
            return user;
        } else {
            alert('Invalid Email or Password 😟')
            // toast.error('Invalid Email or Password 😟');
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