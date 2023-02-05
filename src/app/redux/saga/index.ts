import axios from "axios";
import { put, call, takeLatest } from "redux-saga/effects";
import { fetchError, fetchStart, fetchSuccess } from "../../../common/redux/actions/common";
import { api_url } from "../../../setup/api/baseUrl";
import { fetchAllPostsSucceed, fetchSinglePostSucceed, searchPostSucceed } from "../actions";
import {
    CREATE_POST_REQUEST,
    FETCH_POSTS_REQUEST,
    FETCH_SINGLE_POST_REQUEST,
    SEARCH_POST_REQUEST,
    UPDATE_POST_REQEUST,
} from "../types";

function fetchPostsApi() {
    return axios.get(api_url).then((response) => {
        return response.data;
    });
}

function fetchSinglePostApi(payload: any) {
    const { id } = payload;
    const url = `${api_url}/${id}`;
    return axios.get(url).then((response) => {
        return response.data;
    });
}

function createPostApi() {
    return axios.post(api_url).then((response) => {
        return;
    });
}

function searchPostApi(payload: any) {
    const {title} = payload
    console.log("Payload", payload)
    console.log("Title", title)
    const url = `${api_url}?q=${payload}`;
    return axios.get(url).then((response) => {
        return response.data;
    });
}

export function* createPostSaga(): any {
    yield put(fetchStart());
    try {
        const response = yield call(createPostApi);
        if (!response.error) {
            console.log("response");
        } else {
            console.log("Not Found");
        }
    } catch (error) {
        console.log(error);
    }
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

export function* searchPostSaga({ payload }: any): any {
    try {
        const response: any = yield call(searchPostApi, payload);
        yield put(searchPostSucceed(response));
    } catch (error) {
        yield put(fetchError());
    }
}

export function* postsSaga() {
    yield takeLatest(FETCH_POSTS_REQUEST, fetchPostsSaga);
    yield takeLatest(FETCH_SINGLE_POST_REQUEST, fetchSinglePostSaga);
    yield takeLatest(CREATE_POST_REQUEST, createPostSaga);
    yield takeLatest(SEARCH_POST_REQUEST, searchPostSaga);
}
