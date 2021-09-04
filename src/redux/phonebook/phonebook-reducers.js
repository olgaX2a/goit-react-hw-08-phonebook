import { createReducer, combineReducers } from '@reduxjs/toolkit'
import { filterContact } from './phonebook-actions'
import {
  fetchContacts,
  addContact,
  deleteContact,
} from './phonebook-operations'

const contacts = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
})

const filterReducer = createReducer('', {
  [filterContact]: (_, { payload }) => payload,
})
export const phonebookReducer = combineReducers({
  contacts,
  filter: filterReducer,
})
export default phonebookReducer
