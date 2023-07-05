import axios from 'axios';
import { FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILURE } from '../types/categoryTypes';

export const fetchCategories = () => async (dispatch) => {
  try {
    const response = await axios.get('https://financialmodelingprep.com/api/v3/income-statement/AAPL?apikey=c0fbcfdc5c4d0cc65048d2e348018d24');
    const categories = response.data;
    dispatch({ type: FETCH_CATEGORIES_SUCCESS, payload: categories });
  } catch (error) {
    dispatch({ type: FETCH_CATEGORIES_FAILURE, payload: error.message });
  }
};
