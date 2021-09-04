import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchContacts = createAsyncThunk(
  '/contacts/fetchContacts',
  async () => {
    try {
      const { data } = await axios.get('/contacts')
      return data
    } catch (error) {
      console.log(error.message)
    }
  },
)

export const addContact = createAsyncThunk(
  '/contacts/addContact',
  async (contact) => {
    try {
      const { data } = await axios.post('/contacts', contact)
      return data
    } catch (error) {
      console.log(error.message)
    }
  },
)

export const deleteContact = createAsyncThunk(
  '/contacts/deleteContact',
  async (contactId) => {
    try {
      await axios.delete(`/contacts/${contactId}`)
      return contactId
    } catch (error) {
      console.log(error.message)
    }
  },
)
