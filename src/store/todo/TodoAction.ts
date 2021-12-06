import { Dispatch } from "redux";

import { AppActions } from "../models/actions";

import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from "./models/actions";
import { Data } from "./models/Data";
// interface objectsOfDataInter {
//   [index: number]: { id: number; imageUrl: string; title: string; publishedAt: string; summary:string};
// }
const requestData = (): AppActions => ({
  type: FETCH_DATA_REQUEST,
  data: [],
  error: "",
});
const receiveData = (data: Data[]): AppActions => ({
  type: FETCH_DATA_SUCCESS,
  data: data,
  error: "",
});
const invalidateData = (): AppActions => ({
  type: FETCH_DATA_FAILURE,
  data: [],
  error: "Unable to fetch data ",
});

export const boundRequestData = () => {
   
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(requestData());
    return fetch(`https://api.spaceflightnewsapi.net/v3/articles`)
      
      .then((res) => res.json())
      .then((json) => {
         
        const arr:{ id: number; imageUrl: string; title: string; publishedAt: string; summary:string}[] = []
        json.forEach((data:{ id: number; imageUrl: string; title: string; publishedAt: string; summary:string}) => {
          arr.push({id: data.id, imageUrl: data.imageUrl, title: data.title, publishedAt: data.publishedAt, summary:data.summary})
          // arr.push({id: 2, imageUrl:` data.imageUrl`, title: `data.title`, publishedAt: `data.publishedAt`, summary:`data.summary`})

        })
         
        dispatch(receiveData(arr));
      }).catch(() => {
        dispatch(invalidateData())
      })
  };
};

// const receiveTodos = (todos: Todo[]): AppActions => ({
//   type: FETCH_TODOS_SUCCESS,
//   loading: false,
//   todos: todos,
//   error: '',
// });
