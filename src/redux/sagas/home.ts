import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchDataSuccess, fetchDataFailure } from '../actions/home';
import { FETCH_DATA_REQUEST } from '../../interface/redux.interface';
import { getListDataEP } from '../../api/listData.api';

function* fetchDataSaga(): Generator<any, any, any> {
  try {
    const response = yield call(getListDataEP);
    yield put(fetchDataSuccess(response.data));
  } catch (error: any) {
    yield put(fetchDataFailure(error.message));
  }
}

export function* watchFetchData() {
  yield takeLatest(FETCH_DATA_REQUEST, fetchDataSaga);
}
