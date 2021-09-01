import { createSlice } from '@reduxjs/toolkit'

import { register, logIn } from './auth-operations'

const authReduser = createSlice({
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
  },
})

export default authReduser.reducer
