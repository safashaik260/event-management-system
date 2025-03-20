import { configureStore } from '@reduxjs/toolkit'
import  userReducer from './features/userslice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 

const persistConfig = {
  key: 'root',
  storage,
  whitelist:['user']
}

const persistedReducer = persistReducer(persistConfig, userReducer)

export const store = configureStore({
  reducer: {
    user:persistedReducer
  },
  middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware({
      serializableCheck:false
    })
  
})
export const persistor=persistStore(store)