
import { AnyAction } from 'redux-saga';


// Action Types
export const DELETE_DATA_REQUEST = 'DELETE_DATA_REQUEST';
export const DELETE_DATA_SUCCESS = 'DELETE_DATA_SUCCESS';
export const DELETE_DATA_FAILURE = 'DELETE_DATA_FAILURE';

// Action Creators Interfaces
interface DeleteDataRequestAction extends AnyAction {
  type: typeof DELETE_DATA_REQUEST;
  id: string;
}

interface DeleteDataSuccessAction extends AnyAction {
  type: typeof DELETE_DATA_SUCCESS;
}

interface DeleteDataFailureAction extends AnyAction {
  type: typeof DELETE_DATA_FAILURE;
  payload: string;
}

export type DeleteDataActionTypes = DeleteDataRequestAction | DeleteDataSuccessAction | DeleteDataFailureAction;

// State Type
export interface DeleteDataState {
  loading: boolean;
  success: boolean;
  error: string;
}

export interface AppDeleteDataState {
  deleteData: DeleteDataState;
}
