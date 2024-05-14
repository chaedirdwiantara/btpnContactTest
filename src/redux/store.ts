import { createStore, applyMiddleware, Store, AnyAction } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers'; // correct the path if needed
import rootSaga from './sagas'; // correct the path if needed
import { AppFetchState } from '../interface/fetchData.interface'; // update this path

const sagaMiddleware = createSagaMiddleware();

const store: Store<AppFetchState, AnyAction> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
