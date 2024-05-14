
import { dataList, responseListEp } from "./dataList.interface";
import { AnyAction } from 'redux-saga';

// Action Types
export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

// Action Creators Interfaces
interface FetchDataRequestAction extends AnyAction {
  type: typeof FETCH_DATA_REQUEST;
}

interface FetchDataSuccessAction extends AnyAction {
  type: typeof FETCH_DATA_SUCCESS;
  payload: dataList[]; // Adjust according to the data you expect
}

interface FetchDataFailureAction extends AnyAction {
  type: typeof FETCH_DATA_FAILURE;
  payload: string;
}

export type HomeActionTypes = FetchDataRequestAction | FetchDataSuccessAction | FetchDataFailureAction;

// State Type
export interface HomeState {
  loading: boolean;
  data: dataList[]; // Adjust according to the data you expect
  error: string;
}

export interface ApplicationState {
  home: HomeState;
}
