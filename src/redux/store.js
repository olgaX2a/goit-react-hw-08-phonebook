import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
// import { setupListeners } from '@reduxjs/toolkit/query'
import logger from 'redux-logger'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// import { phonebookApi } from './phonebook/phonebookApi'
// import { filterReducer } from './phonebook/filterReducer'
import { phonebookReducer } from './phonebook/phonebook-reducers'
import authReduser from './auth/auth-slices'

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
]
const authPersistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
}
const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
    auth: persistReducer(authPersistConfig, authReduser),
  },
  middleware,
  // devTools: process.env.NODE_ENV !== 'production',
  devTools: true,
})

const persistor = persistStore(store)

export default { store, persistor }
