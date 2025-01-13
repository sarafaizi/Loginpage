import userReducer from './UserSlice';
import { createSerializableStateInvariantMiddleware } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});


