import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './reducers/categoryReducers';

const store = configureStore({
  reducer: {
    categories: categoryReducer,
  },
});

export default store;
