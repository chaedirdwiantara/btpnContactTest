import { Effect, call, put, takeLatest } from 'redux-saga/effects';
import { fetchDataSuccess, fetchDataFailure } from '../actions/fetchData.action';
import { FETCH_DATA_REQUEST } from '../../interface/fetchData.interface';
import { getListDataEP } from '../../api/listData.api';
import {  responseListEp } from '../../interface/dataList.interface';

function* fetchDataSaga(): Generator<Effect, void, responseListEp> {
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
