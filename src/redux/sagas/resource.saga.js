import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* fetchResources(action) {
  try {
    let response = yield axios.get("/api/resource");
    yield put({
      type: "SET_RESOURCES",
      payload: response.data,
    });
  } catch (err) {
    console.warn(err);
  }
}

function* resourceSaga() {
  yield takeLatest("FETCH_RESOURCE", fetchResources);
}

export default resourceSaga;
