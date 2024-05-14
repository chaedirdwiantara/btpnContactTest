import { all } from 'redux-saga/effects';
import { watchFetchData } from './fetchData.saga';
import { watchCreateData } from './createData.saga';
import { watchDeleteData } from './deleteData.saga';
import { watchUpdateData } from './updateData.saga';

export default function* rootSaga() {
  yield all([
    watchFetchData(),
    watchCreateData(),
    watchUpdateData(),
    watchDeleteData(),
  ]);
}
