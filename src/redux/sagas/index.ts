import { all } from 'redux-saga/effects';
import { watchFetchData } from './fetchData.saga';

export default function* rootSaga() {
  yield all([
    watchFetchData(),
    // ...other sagas
  ]);
}
