import axios from "axios";
import { put, call, takeLatest } from "redux-saga/effects";
import { fetchError, fetchStart, fetchSuccess } from "../../../../../redux/actions/common";
import { api_url } from "../../../../../setup/api/baseUrl";
import { fetchAllPostsSucceed } from "../actions";
import { FETCH_POSTS_REQUEST } from "../types";

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

export function* postsSaga() {
    yield takeLatest(FETCH_POSTS_REQUEST, fetchPostsSaga);
}
