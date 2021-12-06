import {
  DetailedActionTypes,
  DETAILED_DATA_ADD,
 
} from './models/actions';

 
interface DataState {
  id: number;
  imageUrl: string;
  title: string;
  publishedAt: string;
  summary: string; 
}

const defaultState: DataState = {
  id: 0,
  imageUrl: '',
  title: '',
  publishedAt: '',
  summary: '',
};





export const detailedData = (
  state = defaultState,
  action: DetailedActionTypes
): DataState => {
  switch (action.type) {
    case DETAILED_DATA_ADD:
      return { ...action.payload };

    default:
      return state;
  }
};
