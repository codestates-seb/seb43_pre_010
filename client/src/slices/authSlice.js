/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  name: null,
  isLogin: false,
  userId: null,
};

const authSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    login (state, action) {
      const incomeUserInfo = action.payload;

      state.userId = incomeUserInfo.userId;
      state.email = incomeUserInfo.email;
      state.name = incomeUserInfo.name;
      state.isLogin = true;
    },

    logout (state) {
      state.email = null;
      state.name = null;
      state.isLogin = false;
    },

    getUserInfo (state) {
      return state;
    },
  },
});

export const { login, logout, getUserInfo } = authSlice.actions;
export default authSlice.reducer;