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
    const response = yield axios.get(`/api/resource/details/${resourceId}`);
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
    yield axios.put(
      `/api/resource/edit/${action.payload.id}`,
      action.payload.newDetails
    );
    yield put({
      type: "SET_DETAILS",
      payload: action.payload,
    });
  } catch (err) {
    console.warn(err);
  }
}

function* deleteResource(action) {
  try {
    yield axios.delete(`/api/resource/delete/${action.payload}`);
    yield put({
      type: "FETCH_RESOURCES",
    });
  } catch (err) {
    console.log("error HELP:", err);
  }
}

function* addResource(action) {
  try {
    const resourceId = action.payload;
    let response = yield axios.get(`/api/resource/details/${resourceId}`);
    yield put({
      type: "FETCH_RESOURCES",
      payload: response.data,
    });
    yield console.log(response.data);
  } catch (err) {
    console.warn(err);
  }
}

function* resourceSaga() {
  yield takeEvery("FETCH_RESOURCES", fetchAllResources);
  yield takeEvery("GET_RESOURCE", getResource);
  yield takeEvery("SAVE_RESOURCES", saveResources);
  yield takeEvery("REMOVE_RESOURCE", deleteResource);
  yield takeEvery("ADD_RESOURCE", addResource);
}

export default resourceSaga;
