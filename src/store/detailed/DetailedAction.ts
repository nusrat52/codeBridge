import { Dispatch } from "redux";

import { DetailedActions } from "../models/actions";

import {
  DETAILED_DATA_ADD,
 
} from "./models/actions";
import { Data } from "./models/Data";
 
export const DetailedDataAdd = (data:Data): DetailedActions => ({
  type: DETAILED_DATA_ADD,
  payload:data ,

 });




