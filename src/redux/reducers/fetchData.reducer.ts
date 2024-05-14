import { FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FetchDataActionTypes, FetchDataState } from "../../interface/fetchData.interface";

const initialState: FetchDataState = {
  loading: false,
  data: [],
  error: '',
};

const fetchDataReducer = (state = initialState, action: FetchDataActionTypes): FetchDataState => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { ...state, loading: true };
    case FETCH_DATA_SUCCESS:
      return { loading: false, data: action.payload, error: '' };
    case FETCH_DATA_FAILURE:
      return { loading: false, data: [], error: action.payload };
    default:
      return state;
  }
};

export default fetchDataReducer;
