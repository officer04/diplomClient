import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const createUser = createAsyncThunk('users/createUser', async (payload, thunkAPI) => {
  try {
    // const response = await axios({
    //   method: 'post',
    //   url: 'http://localhost:5000/auth/registration',
    //   data: {
    //     username: payload.username,
    //     password: payload.password,
    //   },
    // });
    const response = await axios.post('http://localhost:5000/auth/registration', payload);
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error);
  }
});

export const loginUser = createAsyncThunk('users/loginUser', async (payload, thunkAPI) => {
  try {
    const response = await axios.post('http://localhost:5000/auth/login', payload);
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error);
  }
});

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {},
    isLoading: null,
  },
  reducers: {
    addUser: (state, { payload }) => {
      state.user = payload;
    },
    addIsloading: (state, {payload}) => {
      state.isLoading = payload;
    }
  },

  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.user = action.payload
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = action.payload
    });
  },
});

export const { addUser, addIsloading } = authSlice.actions;

export default authSlice.reducer;
