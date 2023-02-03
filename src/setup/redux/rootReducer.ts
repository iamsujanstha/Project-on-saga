import { combineReducers } from "redux";
import { postsSaga } from "../../app/pages/home/redux/saga";
import reducer from "../../redux/reducers/common";
import {fork} from 'redux-saga/effects'
import { postReducer } from "../../app/pages/home/redux/reducers";

export const rootReducer = combineReducers({
    reducer: reducer,
    posts: postReducer
});

export function* rootSaga() {
    yield fork(postsSaga);
}
