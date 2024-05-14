import { DELETE_DATA_FAILURE, DELETE_DATA_REQUEST, DELETE_DATA_SUCCESS, DeleteDataActionTypes } from "../../interface/deleteData.interface";

export const deleteDataRequest = (id: string): DeleteDataActionTypes => ({
  type: DELETE_DATA_REQUEST,
  payload: { id },
});

export const deleteDataSuccess = (): DeleteDataActionTypes => ({
  type: DELETE_DATA_SUCCESS,
});

export const deleteDataFailure = (error: string): DeleteDataActionTypes => ({
  type: DELETE_DATA_FAILURE,
  payload: error,
});
