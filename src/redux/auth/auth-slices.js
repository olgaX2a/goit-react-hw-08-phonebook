import { createSlice } from '@reduxjs/toolkit'

import { register, logIn, logOut, getCurrentUser } from './auth-operations'

const authReducer = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isFetchingCurrentUser: false,
  },
  extraReducers: {
    [register.fulfilled]: (state, { payload }) => ({
      ...state,
      isLoggedIn: true,
      user: payload.user,
      token: payload.token,
    }),
    [logIn.fulfilled]: (state, { payload }) => ({
      ...state,
      isLoggedIn: true,
      user: payload.user,
      token: payload.token,
    }),
    [logOut.fulfilled]: (state) => ({
      ...state,
      isLoggedIn: false,
      user: {
        name: null,
        email: null,
      },
      token: null,
    }),
    [getCurrentUser.fulfilled]: (state, { payload }) => ({
      ...state,
      isLoggedIn: true,
      user: payload.user,
      isFetchingCurrentUser: false,
    }),
    [getCurrentUser.pending]: (state) => ({
      ...state,
      isFetchingCurrentUser: true,
    }),
    [getCurrentUser.rejected]: (state) => ({
      ...state,
      isFetchingCurrentUser: false,
    }),
  },
})

export default authReducer.reducer
