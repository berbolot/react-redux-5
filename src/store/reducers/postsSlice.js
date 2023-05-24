import { createSlice } from "@reduxjs/toolkit";
import fetchPosts from "../actions/postsCreator";

const initialState = {
  loading: false,
  posts: [],
  error: "",
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
      builder.addCase(fetchPosts.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
        state.posts = [];
      });
      builder.addCase(fetchPosts.fulfilled, (state, action) => {
        state.error = "";
        state.loading = false;
        state.posts = action.payload;
      });
  },
});

const postsReducer = postsSlice.reducer;

export default postsReducer;
