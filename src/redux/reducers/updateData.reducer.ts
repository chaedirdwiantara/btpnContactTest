import { UPDATE_DATA_FAILURE, UPDATE_DATA_REQUEST, UPDATE_DATA_SUCCESS, UpdateDataActionTypes, UpdateDataState } from "../../interface/updateData.interface";

const initialState: UpdateDataState = {
  loading: false,
  error: '',
  success: false,
};

const updateDataReducer = (state = initialState, action: UpdateDataActionTypes): UpdateDataState => {
  switch (action.type) {
    case UPDATE_DATA_REQUEST:
      return { ...state, loading: true };
    case UPDATE_DATA_SUCCESS:
      return { loading: false, error: '', success: true };
    case UPDATE_DATA_FAILURE:
      return { loading: false, error: action.payload, success: false };
    default:
      return state;
  }
};

export default updateDataReducer;
