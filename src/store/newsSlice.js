import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  news: [],
  featuredNews: null,
  loading: false,
  error: null,
  currentPage: 1,
  totalPages: 1,
};

export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async ({ page = 1, category = "" } = {}) => {
    const response = await fetch(`/api/news?page=${page}&category=${category}`);
    return response.json();
  }
);

export const fetchNewsBySlug = createAsyncThunk(
  "news/fetchNewsBySlug",
  async (slug) => {
    const response = await fetch(`/api/news/${slug}`);
    return response.json();
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.loading = false;
        state.news = action.payload.news;
        state.featuredNews = action.payload.featuredNews;
        state.currentPage = action.payload.currentPage;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message || "Failed to fetch news";
      });
  },
});

export const { setCurrentPage } = newsSlice.actions;
export default newsSlice.reducer;


