import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (payload, thunkApi) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API}/posts`, {
        signal: thunkApi.signal,
      });
      const data = await response.json();
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export default fetchPosts;
