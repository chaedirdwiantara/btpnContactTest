import { CREATE_DATA_FAILURE, CREATE_DATA_REQUEST, CREATE_DATA_SUCCESS, CreateDataActionTypes, bodyParamsCreateDataType } from "../../interface/createData.interface";

export const createDataRequest = (data:bodyParamsCreateDataType): CreateDataActionTypes => ({
  type: CREATE_DATA_REQUEST,
  body: data,
});

export const createDataSuccess = (): CreateDataActionTypes => ({
  type: CREATE_DATA_SUCCESS,
});

export const createDataFailure = (error: string): CreateDataActionTypes => ({
  type: CREATE_DATA_FAILURE,
  payload: error,
});
