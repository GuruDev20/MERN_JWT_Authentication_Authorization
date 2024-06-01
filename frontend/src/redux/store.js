import {configureStore} from '@reduxjs/toolkit'
import AuthSlice from './AuthSlice'
import storage from 'redux-persist/lib/storage'
import {persistReducer,persistStore} from 'redux-persist'

const persistConfig={
    key:"root",
    storage,
}

const reducer=persistReducer(persistConfig,AuthSlice)
export const Store=configureStore({
    reducer:{
        Auth:reducer
    }
})

export const persist=persistStore(Store)