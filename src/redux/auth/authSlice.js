import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

import { logIn, logOut, refreshUser, register } from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const handlerAuthFulfilled = (state, action) => {
  const { user, token } = action.payload;
  state.user = user;
  state.token = token;
  state.isLoggedIn = true;
};

const handleLogOutFulfilled = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

const handleRefreshFulfilled = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, handlerAuthFulfilled)
      .addCase(logIn.fulfilled, handlerAuthFulfilled)
      .addCase(logOut.fulfilled, handleLogOutFulfilled)
      .addCase(refreshUser.pending, state => (state.isRefreshing = true))
      .addCase(refreshUser.fulfilled, handleRefreshFulfilled)
      .addCase(refreshUser.rejected, state => (state.isRefreshing = false)),
});

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
