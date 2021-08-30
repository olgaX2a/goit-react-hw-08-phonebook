import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const register = createAsyncThunk(
  'auth/register',
  async (credentials) => {
    const { data } = await axios.post('/users/signup', credentials)
    return data
  },
)
