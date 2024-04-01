import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = "https://jobsapi.cambizs.com/";

export const loginUser = createAsyncThunk('users/login', async (userData, thunkAPI) => {

    const response = await fetch(`${BASE_URL}api/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    });

    let data = await response.json();

    if (response.status === 200) {

        return { user: data.user, token: data.token };
    } else {
        return thunkAPI.rejectWithValue(data);
    }
});

export const logoutUser = createAsyncThunk('users/logout', async (_, thunkAPI) => {
    try {
        // Make a request to the logout API endpoint
        await axios.post(`${BASE_URL}api/logout`);

        // Clear the user data and token from the state
        thunkAPI.dispatch(setToken(null));
        thunkAPI.dispatch(setUser(null));
        // Add any other necessary state updates here

        // Return any additional data if needed
        return { success: true };
    } catch (error) {
        // Handle any errors that occur during the logout process
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const registerUser = createAsyncThunk('users/register', async (userData, thunkAPI) => {
    const response = await fetch(`${BASE_URL}api/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    });

    let data = await response.json();

    if (response.status === 200) {
       
        return { user: data.user, token: data.token };
    } 
    
    else {
        if(response.status===422)
        {
            return { message:data.message };
        }
        else {
            return thunkAPI.rejectWithValue(data);
        }
        
    }
});


export const userSlice = createSlice({
    name: 'user',
    initialState: { entities: [], loading: 'idle', error: null, token: null, user: null },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        });
        builder.addCase(logoutUser.fulfilled, (state) => {
            state.user = null;
            state.token = null;
        });
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.entities.push(action.payload);
        });
        builder.addCase(registerUser.rejected, (state, action) => {
            if (action.payload) {
                // If a payload is available, it means that `rejectWithValue` was called
                state.error = action.payload.error;
              } else {
                // Otherwise, the error was thrown in the async function
                state.error = action.error.message;
              }
          
        });
    },
});

export const { setToken, setUser } = userSlice.actions;

export default userSlice.reducer;



