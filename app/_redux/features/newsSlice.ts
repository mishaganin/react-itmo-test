import {AsyncThunk, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { INews } from "@/app/_global/types";

const AMOUNT_OF_NEWS = 9;
const BASE_URL = "https://news.itmo.ru/api/news/list/?ver=2.0";

export interface NewsState {
  news: INews[];
  newsAmount: number;
  status: string;
  error?: string;
}

const initialState: NewsState = {
  news: [],
  newsAmount: AMOUNT_OF_NEWS,
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
  data.news.length = AMOUNT_OF_NEWS;
  const news: INews[] = [];
  data.news.map((article: any) => {
    news.push({
      id: article.id,
      date: article.date,
      imageSrc: article.image_big,
      title: article.title,
      url: article.url,
    });
  });

  return news;
});

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getNews.pending, (state) => {
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
