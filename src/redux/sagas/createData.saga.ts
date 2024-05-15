import { Effect, call, put, takeLatest } from 'redux-saga/effects';
import { createDataEP } from '../../api/listData.api';
import {  responseListEp } from '../../interface/dataList.interface';
import { createDataFailure, createDataSuccess } from '../actions/createData.action';
import { CREATE_DATA_REQUEST, CreateDataActionTypes } from '../../interface/createData.interface';

function* createDataSaga(action:CreateDataActionTypes): Generator<Effect, void, responseListEp> {
  try {
    const response = yield call(createDataEP,action.body);
    yield put(createDataSuccess());
  } catch (error: any) {
    yield put(createDataFailure(error.message));
  }
}

export function* watchCreateData() {
  yield takeLatest(CREATE_DATA_REQUEST, createDataSaga);
}
