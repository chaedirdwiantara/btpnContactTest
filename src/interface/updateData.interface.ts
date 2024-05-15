
import { dataList } from "./dataList.interface";
import { AnyAction } from 'redux-saga';

export interface bodyParamsUpdaDataType {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  photo?: string;
}
// Action Types
export const UPDATE_DATA_REQUEST = 'UPDATE_DATA_REQUEST';
export const UPDATE_DATA_SUCCESS = 'UPDATE_DATA_SUCCESS';
export const UPDATE_DATA_FAILURE = 'UPDATE_DATA_FAILURE';

// Action Creators Interfaces
interface UpdateDataRequestAction extends AnyAction {
  type: typeof UPDATE_DATA_REQUEST;
  body: bodyParamsUpdaDataType
}

interface UpdateDataSuccessAction extends AnyAction {
  type: typeof UPDATE_DATA_SUCCESS;
}

interface UpdateDataFailureAction extends AnyAction {
  type: typeof UPDATE_DATA_FAILURE;
  payload: string;
}

export type UpdateDataActionTypes = UpdateDataRequestAction | UpdateDataSuccessAction | UpdateDataFailureAction;

// State Type
export interface UpdateDataState {
  loading: boolean;
  success: boolean;
  error: string;
}

export interface AppUpdateState {
  updateData: UpdateDataState;
}
