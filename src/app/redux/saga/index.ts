import axios from "axios";
import { put, call, takeLatest, all } from "redux-saga/effects";
import {
  fetchError,
  fetchStart,
  fetchSuccess,
} from "../../../common/redux/actions/common";
import { api_url } from "../../../setup/api/baseUrl";
import {
  createPostSucceed,
  deletePostSucceed,
  fetchAllPosts,
  fetchAllPostsSucceed,
  fetchSinglePostSucceed,
  searchPostSucceed,
  updatePostSucceed,
} from "../actions";
import {
  CREATE_POST_REQUEST,
  DELETE_POST_REQUEST,
  FETCH_POSTS_REQUEST,
  FETCH_SINGLE_POST_REQUEST,
  SEARCH_POST_REQUEST,
  UPDATE_POST_REQEUST,
} from "../types";

//============================ Get All Posts ============================================
function fetchPostsApi() {
  return axios.get(api_url).then((response) => {
    return response.data;
  });
}

export function* fetchPostsSaga(): any {
  yield put(fetchStart());
  try {
    const response = yield call(fetchPostsApi);
    if (!response.error) {
      yield put(fetchSuccess());
      yield put(fetchAllPostsSucceed(response));
    } else {
      yield put(fetchError());
    }
  } catch (error) {
    yield put(fetchError());
  }
}

// ============================= Get Single Post ===========================================
function fetchSinglePostApi(payload: any) {
  const { id } = payload;
  const url = `${api_url}/${id}`;
  return axios.get(url).then((response) => {
    return response.data;
  });
}

export function* fetchSinglePostSaga({ payload }: any): any {
  yield put(fetchStart());
  try {
    const response: any = yield call(fetchSinglePostApi, payload);

    if (!response.error) {
      yield put(fetchSuccess());
      yield put(fetchSinglePostSucceed(response));
    } else {
      yield put(fetchError());
    }
  } catch (error) {
    yield put(fetchError());
  }
}

// ================================= Create Post ===========================================
function createPostApi(payload: any) {
  return axios.post(api_url, payload).then((response) => {
    return response.data;
  });
}

export function* createPostSaga({ payload }: any): any {
  try {
    const response = yield call(createPostApi, payload);
    if (!response.error) {
      yield put(createPostSucceed(response));
    } else {
      yield put(fetchError());
    }
  } catch (error) {
    yield put(fetchError());
  }
}

// ==================================== Delete Post ============================================
function deletePostApi({ payload }: any) {
  const id = payload;
  return axios.delete(`${api_url}/${id}`).then((response) => {
    return response.data;
  });
}

export function* deletePostSaga(payload: any): any {
  try {
    const response = yield call(deletePostApi, payload);
    if (!response.error) {
      yield all([put(deletePostSucceed(response)), put(fetchAllPosts())]);
    }
  } catch (error) {
    yield put(fetchError());
  }
}
// ==================================== Update Post ============================================
function updatePostApi({ payload }: any) {
  const { id, ...rest } = payload;
  return axios.put(`${api_url}/${id}`, rest).then((response) => {
    return response.data;
  });
}

export function* updatePostSaga(payload: any): any {
  try {
    const reponse = yield call(updatePostApi, payload);
    if (!reponse.error) {
      yield put(updatePostSucceed(reponse));
    }
  } catch (error) {
    yield put(fetchError());
  }
}

// ==================================== Search Post ============================================
function searchPostApi(payload: any) {
  const title = payload;
  const url = `${api_url}?q=${title}`;
  return axios.get(url).then((response) => {
    return response.data;
  });
}

export function* searchPostSaga({ payload }: any): any {
  try {
    const response: any = yield call(searchPostApi, payload);
    yield put(searchPostSucceed(response));
  } catch (error) {
    yield put(fetchError());
  }
}

//Connect action with saga middleware
export function* postsSaga() {
  yield takeLatest(FETCH_POSTS_REQUEST, fetchPostsSaga);
  yield takeLatest(FETCH_SINGLE_POST_REQUEST, fetchSinglePostSaga);
  yield takeLatest(CREATE_POST_REQUEST, createPostSaga);
  yield takeLatest(SEARCH_POST_REQUEST, searchPostSaga);
  yield takeLatest(DELETE_POST_REQUEST, deletePostSaga);
  yield takeLatest(UPDATE_POST_REQEUST, updatePostSaga);
}
