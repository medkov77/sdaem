import { fetchNews, fetcOnehNews, searchNews } from "./../ActionCreators";
import { Inews, Isearch } from "./../../models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState = {
  news: [
    {
      _id: "",
      title: "Main news",
      text: ["text"],
      image: "",
      date: "",
      subTitle: "",
    },
  ],
  isLoading: true,
  error: "",
  isLoadingOne: true,
  curentNews: {
    _id: "",
    title: "Main news",
    text: ["text"],
    image: "",
    date: "",
    subTitle: "",
  },
  searchIsloading: true,
  search: [{ title: "", _id: "" }],
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchNews.fulfilled.type]: (state, action: PayloadAction<Inews[]>) => {
      state.isLoading = false;
      state.error = "";
      state.news = action.payload;
    },
    [fetchNews.pending.type]: (state, action: PayloadAction<Inews[]>) => {
      state.isLoading = true;
    },
    [fetchNews.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [fetcOnehNews.fulfilled.type]: (state, action: PayloadAction<Inews>) => {
      state.isLoadingOne = false;
      state.error = "";
      state.curentNews = action.payload;
    },
    [fetcOnehNews.pending.type]: (state, action: PayloadAction<Inews>) => {
      state.isLoadingOne = true;
    },
    [fetcOnehNews.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoadingOne = false;
      state.error = action.payload;
    },

    [searchNews.fulfilled.type]: (state, action: PayloadAction<Isearch[]>) => {
      state.searchIsloading = false;
      state.error = "";
      state.search = action.payload;
    },
    [searchNews.pending.type]: (state, action: PayloadAction<Inews>) => {
      state.searchIsloading = true;
    },
    [searchNews.rejected.type]: (state, action: PayloadAction<string>) => {
      state.searchIsloading = false;
      state.error = action.payload;
    },
  },
});

const { reducer: newsReducer, actions } = newsSlice;

export default newsReducer;
