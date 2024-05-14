
import { AnyAction } from 'redux-saga';

export interface bodyParamsCreateDataType {
  firstName: string;
  lastName: string;
  age: number;
  photo?: string;
}

// Action Types
export const CREATE_DATA_REQUEST = 'CREATE_DATA_REQUEST';
export const CREATE_DATA_SUCCESS = 'CREATE_DATA_SUCCESS';
export const CREATE_DATA_FAILURE = 'CREATE_DATA_FAILURE';

// Action Creators Interfaces
interface CreateDataRequestAction extends AnyAction {
  type: typeof CREATE_DATA_REQUEST;
  body: bodyParamsCreateDataType;
}

interface CreateDataSuccessAction extends AnyAction {
  type: typeof CREATE_DATA_SUCCESS; 
}

interface CreateDataFailureAction extends AnyAction {
  type: typeof CREATE_DATA_FAILURE;
  payload: string;
}

export type CreateDataActionTypes = CreateDataRequestAction | CreateDataSuccessAction | CreateDataFailureAction;

// State Type
export interface CreateDataState {
  loading: boolean;
  body: bodyParamsCreateDataType;
  error: string;
}

export interface AppCreateState {
  createData: CreateDataState;
}
