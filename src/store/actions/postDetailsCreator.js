import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchPost = createAsyncThunk(
  "posts/fetchPost",
  async (payload, thunkApi) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API}/posts/${payload}`, {
        signal: thunkApi.signal,
      });
      const data = await response.json();
      console.log(data);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export default fetchPost;
