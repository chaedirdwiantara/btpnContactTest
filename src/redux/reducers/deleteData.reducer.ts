import { DELETE_DATA_FAILURE, DELETE_DATA_REQUEST, DELETE_DATA_SUCCESS, DeleteDataActionTypes, DeleteDataState } from "../../interface/deleteData.interface";

const initialState: DeleteDataState = {
  loading: false,
  payload: {
    id: '',
  },
  error: '',
};

const deleteDataReducer = (state = initialState, action: DeleteDataActionTypes): DeleteDataState => {
  switch (action.type) {
    case DELETE_DATA_REQUEST:
      return { ...state, loading: true };
    case DELETE_DATA_SUCCESS:
      return { loading: false, error: '', payload: action.payload };
    case DELETE_DATA_FAILURE:
      return { loading: false, error: action.payload, payload: initialState.payload };
    default:
      return state;
  }
};

export default deleteDataReducer;
