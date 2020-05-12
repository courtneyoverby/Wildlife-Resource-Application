import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

function* fetchAllResources(action) {
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

function* getResource(action) {
  try {
    const resourceId = action.payload;
    const response = yield axios.get(`/api/resources/details/${resourceId}`);
    yield put({
      type: "SET_DETAILS",
      payload: response.data[0],
    }); // put() is the same as this.props.dispatch()
  } catch (err) {
    console.warn(err);
  }
}

function* saveResources(action) {
  try {
    console.log("inSaga", action.payload);
    yield axios.put("/api/resources/edit", action.payload);
    yield put({
      type: "GET_RESOURCES",
    });
  } catch (err) {
    console.warn(err);
  }
}

function* resourceSaga() {
  yield takeEvery("FETCH_RESOURCES", fetchAllResources);
  yield takeEvery("GET_RESOURCE", getResource);
  yield takeEvery("SAVE_RESOURCES", saveResources);
}

export default resourceSaga;
