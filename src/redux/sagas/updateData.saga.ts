import { Effect, call, put, takeLatest } from 'redux-saga/effects';
import { getListDataEP } from '../../api/listData.api';
import {  responseListEp } from '../../interface/dataList.interface';
import { updateDataFailure, updateDataSuccess } from '../actions/updateData.action';
import { UPDATE_DATA_REQUEST } from '../../interface/updateData.interface';

function* updateDataSaga(): Generator<Effect, void, responseListEp> {
  try {
    const response = yield call(getListDataEP);
    yield put(updateDataSuccess());
  } catch (error: any) {
    yield put(updateDataFailure(error.message));
  }
}

export function* watchUpdateData() {
  yield takeLatest(UPDATE_DATA_REQUEST, updateDataSaga);
}
