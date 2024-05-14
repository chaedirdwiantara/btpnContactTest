import { UPDATE_DATA_FAILURE, UPDATE_DATA_REQUEST, UPDATE_DATA_SUCCESS, UpdateDataActionTypes, bodyParamsUpdaDataType } from "../../interface/updateData.interface";

export const updateDataRequest = (body: bodyParamsUpdaDataType): UpdateDataActionTypes => ({
  type: UPDATE_DATA_REQUEST,
  body: body,
});

export const updateDataSuccess = (): UpdateDataActionTypes => ({
  type: UPDATE_DATA_SUCCESS,
});

export const updateDataFailure = (error: string): UpdateDataActionTypes => ({
  type: UPDATE_DATA_FAILURE,
  payload: error,
});
