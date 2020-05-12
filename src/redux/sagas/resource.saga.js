import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* fetchResources(action) {
  try {
    let response = yield axios.get("/api/resource");
    yield put({
      type: "SET_RESOURCES",
      payload: response.data,
    });
    yield console.log(response.data);
  } catch (err) {
    console.warn(err);
  }
}

function* saveResources(action) {
  try {
    yield axios.post("/api/element", action.payload);
    yield put({ type: "GET_RESOURCES" });
  } catch (err) {
    console.warn("Error with saveResource:", err);
  }
}

function* resourceSaga() {
  yield takeLatest("FETCH_RESOURCES", fetchResources);
  yield takeEvery("SAVE_RESOURCES", saveResources);
}

export default resourceSaga;
