import { combineReducers } from 'redux';
import homeReducer from './fetchData.reducer';

const rootReducer = combineReducers({
  fetchData: homeReducer,
  // ...other reducers
});

export default rootReducer;
export type AppFetchState = ReturnType<typeof rootReducer>;
