import { dataList } from "../../interface/dataList.interface";
import { FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FetchDataActionTypes } from "../../interface/fetchData.interface";

export const fetchDataRequest = (): FetchDataActionTypes => ({
  type: FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = (data: dataList[]): FetchDataActionTypes => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (error: string): FetchDataActionTypes => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});
