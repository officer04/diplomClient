import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../index';

export const getCours = createAsyncThunk('cours/getCours', async (_, thunkAPI) => {
  try {
    const response = await instance.get(`/cours`);
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error);
  }
});

export const getCoursOne = createAsyncThunk('cours/getCoursOne', async (payload, thunkAPI) => {
  try {
    const response = await instance.get(`/cours/${payload}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error);
  }
});

// export const getCoursModule = createAsyncThunk('cours/getCoursModule', async (_, thunkAPI) => {
//   try {
//     const response = await instance.get(`/module`);
//     return response.data;
//   } catch (error) {
//     console.log(error);
//     return thunkAPI.rejectWithValue(error);
//   }
// });

export const getCoursModule = createAsyncThunk(
  'cours/getCoursModule',
  async (payload, thunkAPI) => {
    try {
      const response = await instance.get(`/module/${payload}`);
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const getCoursModuleLesson = createAsyncThunk(
  'cours/getCoursModuleLesson',
  async (payload, thunkAPI) => {
    try {
      const response = await instance.get(`/lesson/${payload}`);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const getLessonOne = createAsyncThunk(
  'cours/getLessonOne',
  async (payload, thunkAPI) => {
    try {
      const response = await instance.get(`/lesson/details/${payload}`);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const coursSlice = createSlice({
  name: 'cours',
  initialState: {
    courses: [],
    modules: [],
    lessonsInfo: [],
    lesson: {},
    cours: '',
    isLoading: false,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getCours.pending, (state) => {
      state.courses = [];
      state.isLoading = false;
    });
    builder.addCase(getCours.fulfilled, (state, { payload }) => {
      state.courses = payload;
      state.isLoading = true;
    });
    builder.addCase(getCoursModule.fulfilled, (state, { payload }) => {
      state.modules = payload;
      state.isLoading = true;
    });
    builder.addCase(getCoursModule.pending, (state) => {
      state.modules = [];
      state.isLoading = false;
    });
    builder.addCase(getCoursModuleLesson.pending, (state) => {
      state.isLoading = false;
      state.lessonsInfo = [];
    });
    builder.addCase(getCoursModuleLesson.fulfilled, (state, { payload }) => {
      state.lessonsInfo = payload;
      state.isLoading = true;
    });
    builder.addCase(getCoursOne.pending, (state) => {
      state.cours = [];
      state.isLoading = false;
    });
    builder.addCase(getCoursOne.fulfilled, (state, { payload }) => {
      state.cours = payload;
    });
    builder.addCase(getLessonOne.fulfilled, (state, { payload }) => {
      state.lesson = payload;
      state.isLoading = true
    });
  },
});

export const {} = coursSlice.actions;

export default coursSlice.reducer;
