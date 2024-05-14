import { CREATE_DATA_FAILURE, CREATE_DATA_REQUEST, CREATE_DATA_SUCCESS, CreateDataActionTypes, CreateDataState } from "../../interface/createData.interface";


const initialState: CreateDataState = {
  loading: false,
  body: {
    firstName: '',
    lastName: '',
    age: 0,
    photo: '',
  },
  error: '',
};

const createDataReducer = (state = initialState, action: CreateDataActionTypes): CreateDataState => {
  switch (action.type) {
    case CREATE_DATA_REQUEST:
      return { ...state, loading: true };
    case CREATE_DATA_SUCCESS:
      return { loading: false, error: '', body: action.payload };
    case CREATE_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload, body: initialState.body };
    default:
      return state;
  }
};

export default createDataReducer;
