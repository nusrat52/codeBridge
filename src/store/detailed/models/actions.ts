import { Data } from './Data';

export const DETAILED_DATA_ADD = 'DETAILED_DATA_ADD';
 


interface DetailedAsync {
  type: string;
  payload:Data
  
  }

interface CreateDetailed extends DetailedAsync {
  type: typeof DETAILED_DATA_ADD;
}


  





export type DetailedActionTypes =CreateDetailed
