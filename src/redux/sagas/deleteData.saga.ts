import { Effect, call, put, takeLatest } from 'redux-saga/effects';
import { getListDataEP } from '../../api/listData.api';
import {  responseListEp } from '../../interface/dataList.interface';
import { deleteDataFailure, deleteDataSuccess } from '../actions/deleteData.action';
import { DELETE_DATA_REQUEST } from '../../interface/deleteData.interface';

function* deleteDataSaga(): Generator<Effect, void, responseListEp> {
  try {
    const response = yield call(getListDataEP);
    yield put(deleteDataSuccess());
  } catch (error: any) {
    yield put(deleteDataFailure(error.message));
  }
}

export function* watchDeleteData() {
  yield takeLatest(DELETE_DATA_REQUEST, deleteDataSaga);
}
