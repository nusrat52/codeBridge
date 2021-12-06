import {
  TodoActionTypes,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from './models/actions';

import { Data } from './models/Data';

interface DataState {
   data: Data[];
  error: string;
}

const defaultState: DataState = {
   data: [],
  error: '',
};

export const data = (
  state = defaultState,
  action: TodoActionTypes
): DataState => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { data: [], error: '' };
    case FETCH_DATA_SUCCESS:
      return { data: action.data, error: '' };
    case FETCH_DATA_FAILURE:
      return {  data: [], error: action.error };
    default:
      return state;
  }
};
