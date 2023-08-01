import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import { INews } from "@/app/_global/types";

const BASE_URL = "https://news.itmo.ru/api/news/list/?ver=2.0";

export interface NewsState {
  news: INews[];
  status: string;
  error?: string;
}

const initialState: NewsState = {
  news: [],
  status: 'idle',
  error: '',
};

export const getNews = createAsyncThunk("news/getNews", async () => {
  const res = await fetch(BASE_URL, {
    next: {
      tags: ["collection"],
      revalidate: 10,
    },
  });

  const data = await res.json();
  return data.news;
});

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getNews.pending, (state, action) => {
        state.status = "loading"
      })
      .addCase(getNews.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.news = state.news.concat(action.payload);
      })
      .addCase(getNews.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
      })
  }
});

export const {} = newsSlice.actions
export default newsSlice.reducer;
