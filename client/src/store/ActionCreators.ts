import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../config.json";
const newsEndpoint = `${config.apiEndpoint}/news`;
const authEndpoint = `${config.apiEndpoint}auth/signUp/`;
const loginEndpoint = `${config.apiEndpoint}auth/signInWithPassword/`;
export const fetchNews = createAsyncThunk("news/fetchAll", async () => {
  const respons = await axios.get(newsEndpoint);
  return respons.data;
});

export const fetcOnehNews = createAsyncThunk(
  "news/fetcOne",
  async (_id: string) => {
    const respons = await axios.get(`${newsEndpoint}/${_id}`);
    return respons.data;
  }
);

export const searchNews = createAsyncThunk(
  "news/search",
  async (news: string) => {
    const respons = await axios.post(`${newsEndpoint}/search/`, {
      payload: news,
    });
    return respons.data;
  }
);

export const singIn = createAsyncThunk("auth", async (user: object) => {
  const respons = await axios.post(authEndpoint, {
    ...user,
  });
  return respons.data;
});

export const login = createAsyncThunk("login", async (user: object) => {
  const { data } = await axios.post(loginEndpoint, {
    ...user,
    returnSecureToken: true,
  });
  return data;
});
