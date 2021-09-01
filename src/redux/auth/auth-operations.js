import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
  },
  unset() {
    axios.defaults.headers.common.Authorization = ''
  },
}

export const register = createAsyncThunk(
  'auth/register',
  async (credentials) => {
    try {
      const { data } = await axios.post('/users/signup', credentials)
      console.log(`data`, data)
      token.set(data.token)
      return data
    } catch (error) {
      console.log(error.messge)
    }
  },
)

export const logIn = createAsyncThunk('auth/login', async (credentials) => {
  try {
    const { data } = await axios.post('/users/login', credentials)
    console.log(`data`, data)
    token.set(data.token)
    return data
  } catch (error) {
    console.log(error.messge)
  }
})
