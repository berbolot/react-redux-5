import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/index";

const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (payload, thunkApi) => {
    try {
      const response = await api.getPosts()
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export default fetchPosts;
