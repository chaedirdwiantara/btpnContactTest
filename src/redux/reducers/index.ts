import { combineReducers } from 'redux';
import fetchDataReducer from './fetchData.reducer';
import createDataReducer from './createData.reducer';
import updateDataReducer from './updateData.reducer';
import deleteDataReducer from './deleteData.reducer';

const rootReducer = combineReducers({
  fetchData: fetchDataReducer,
  createData: createDataReducer,
  updateData: updateDataReducer,
  deleteData: deleteDataReducer,
});

export default rootReducer;
export type AppFetchState = ReturnType<typeof rootReducer>; 
