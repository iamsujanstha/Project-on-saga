import { combineReducers } from "redux";
import { postsSaga } from "../../app/redux/saga";
import reducer from "../../common/redux/reducers/common";
import {fork} from 'redux-saga/effects'
import { postReducer } from "../../app/redux/reducers";



export const rootReducer = combineReducers({
    state: reducer,
    posts: postReducer
});

export function* rootSaga() {
    yield fork(postsSaga);
}
