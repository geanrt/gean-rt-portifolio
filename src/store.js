import { configureStore } from '@reduxjs/toolkit';
import langReducer from './slices/langSlice';
import contentReducer from './slices/contentSlice';

const store = configureStore({
  reducer: {
    lang: langReducer,
    content: contentReducer,
  },
});

export default store;
