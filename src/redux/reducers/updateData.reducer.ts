import { UPDATE_DATA_FAILURE, UPDATE_DATA_REQUEST, UPDATE_DATA_SUCCESS, UpdateDataActionTypes, UpdateDataState } from "../../interface/updateData.interface";

const initialState: UpdateDataState = {
  loading: false,
  error: '',
  body: {
    firstName: '',
    lastName: '',
    age: 0,
    photo: '',
  },
};

const updateDataReducer = (state = initialState, action: UpdateDataActionTypes): UpdateDataState => {
  switch (action.type) {
    case UPDATE_DATA_REQUEST:
      return { ...state, loading: true };
    case UPDATE_DATA_SUCCESS:
      return { loading: false, error: '', body: action.payload };
    case UPDATE_DATA_FAILURE:
      return { loading: false, error: action.payload, body: initialState.body };
    default:
      return state;
  }
};

export default updateDataReducer;
