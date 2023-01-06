import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../config.json";
const endpoint = `${config.apiEndpoint}/news`;
export const fetchNews = createAsyncThunk("news/fetchAll", async () => {
  const respons = await axios.get(endpoint);
  return respons.data;
});

export const fetcOnehNews = createAsyncThunk(
  "news/fetcOne",
  async (_id: string) => {
    const respons = await axios.get(`${endpoint}/${_id}`);
    return respons.data;
  }
);

export const searchNews = createAsyncThunk(
  "news/search",
  async (news: string) => {
    const respons = await axios.post(`${endpoint}/search/`, {
      payload: news,
    });
    return respons.data;
  }
);
