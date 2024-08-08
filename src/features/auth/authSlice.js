import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

const userExist = JSON.parse(localStorage.getItem("user"))

const authSlice = createSlice({
    name : "auth",
    initialState : {
        user : userExist ? userExist : null,
        isLoading : false,
        isError : false,
        isSuccess : false,
        message : "",
    },

    reducers : {},
        extraReducers : (builder) => {

        builder

        // for register

          .addCase(registerUser.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
            state.isSuccess = false;
            state.message = "";
          })

          .addCase(registerUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.message = "";
            state.user = action.payload;
          })

          .addCase(registerUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.payload;
            state.user = null;
          })

          .addCase(logOutUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.message = "";
            state.user = null;
          })

          // for Login

          .addCase(loginUser.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
            state.isSuccess = false;
            state.message = "";
          })

          .addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.message = "";
            state.user = action.payload;
          })

          .addCase(loginUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.payload;
            state.user = null;
          })

        //   for facebook

          .addCase(facebookUser.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
            state.isSuccess = false;
            state.message = "";
          })

          .addCase(facebookUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.message = "";
            state.user = action.payload;
          })

          .addCase(facebookUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.payload;
            state.user = null;
          });


        },
})

export default authSlice.reducer

// Register Thunk

export const registerUser = createAsyncThunk("AUTH/REGISTER",
async(formData , thunkAPI) => {

    try {
        return await authService.register(formData)
        
    } catch (error) {
       const message = error.response.data.message
       return thunkAPI.rejectWithValue(message)  
    }

})

// Logout 

export const logOutUser = createAsyncThunk("AUTH/LOGOUT",
async() => {
    
    localStorage.removeItem("user")
})

// Log in

export const loginUser = createAsyncThunk("AUTH/LOGIN",
async(formData , thunkAPI) => {

    try {
        return await authService.login(formData)
        
    } catch (error) {
       const message = error.response.data.message
       return thunkAPI.rejectWithValue(message)  
    }

})

// For facebook

export const facebookUser = createAsyncThunk(
  "AUTH/FACEBOOK",
  async (formData, thunkAPI) => {
    try {
      return await authService.facebook(formData);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);