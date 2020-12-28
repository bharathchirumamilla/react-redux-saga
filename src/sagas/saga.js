import { all, call, put, takeEvery } from 'redux-saga/effects';
import { LOAD_RECORDS, RENDER_RECORDS_LIST } from '../actions/actions';

export function* fetchRecords() {
  // const endpoint = 'https://gist.githubusercontent.com/brunokrebs/f1cacbacd53be83940e1e85860b6c65b/raw/to-do-items.json';
  // const response = yield call(fetch, endpoint);
  // const data = yield response.json();
  const data = [{"Name": "John","Id": '101', "Address": "SFO"},{"Name":"Clark","Id":"102","Address":"Newyork"}];
  yield put({ type: RENDER_RECORDS_LIST, recordsData: data });
}

export function* loadRecords() {
  yield takeEvery(LOAD_RECORDS, fetchRecords);
}

export default function* rootSaga() {
  yield all([loadRecords()]);
}