import { Data } from './Data';

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

interface TodoAsync {
  data: Data[];
  error: string,
  
}
  


interface FetchDataRequest extends TodoAsync {
  type: typeof FETCH_DATA_REQUEST;
}
interface FetchDataSuccess extends TodoAsync {
  type: typeof FETCH_DATA_SUCCESS;
}
interface FetchDataFailure extends TodoAsync {
  type: typeof FETCH_DATA_FAILURE;
}


  





export type TodoActionTypes =
  | FetchDataRequest
  | FetchDataSuccess
  | FetchDataFailure;
