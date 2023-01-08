import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { singIn, login } from "../ActionCreators";
import localStorageService from "../sevices/localStorage.service";
const initialState = localStorageService.getAccessToken()
  ? {
      entities: null,
      isLoading: true,
      error: null,
      auth: { userId: localStorageService.getUserId(), name: "" },
      isLoggedIn: true,
      dataLoaded: false,
    }
  : {
      entities: null,
      isLoading: false,
      error: null,
      auth: null,
      isLoggedIn: false,
      dataLoaded: false,
    };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLoggedOut: (state) => {
      state.entities = null;
      state.isLoggedIn = false;
      state.auth = null;
      state.dataLoaded = false;
    },
  },
  extraReducers: {
    [singIn.pending.type]: (state, action) => {
      state.isLoading = true;
    },
    [singIn.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.auth = { userId: action.payload.userId, name: action.payload.name };
      localStorageService.setTokens(action.payload);
      state.isLoggedIn = true;
    },
    [singIn.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [login.pending.type]: (state, action) => {
      state.isLoading = true;
    },
    [login.fulfilled.type]: (state, action) => {
      state.auth = { userId: action.payload.userId, name: action.payload.name };
      localStorageService.setTokens(action.payload);
      state.isLoggedIn = true;
    },
    [login.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

const { reducer: userReducer, actions } = userSlice;
export const { userLoggedOut } = actions;
export default userReducer;
