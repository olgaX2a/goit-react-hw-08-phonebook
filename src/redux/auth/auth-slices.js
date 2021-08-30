import { createSlice } from '@reduxjs/toolkit'

import { register } from './auth-operations'

const authReduser = createSlice({
  name: 'auth',
  initialState: {
    name: null,
    number: null,
  },
  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, action) => action.payload.user)
  },
})

export default authReduser.reducer
