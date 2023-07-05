import axios from 'axios';
import { FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILURE } from '../types/categoryTypes';

export const fetchCategories = () => async (dispatch) => {
  try {
    const response = await axios.get('https://api.coinstats.app/public/v1/coins');
    const categories = response.data.coins; // Assuming the array of categories is under the 'coins' property
    dispatch({ type: FETCH_CATEGORIES_SUCCESS, payload: categories });
  } catch (error) {
    dispatch({ type: FETCH_CATEGORIES_FAILURE, payload: error.message });
  }
};
