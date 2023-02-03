import { FETCH_POSTS_SUCCEED, FETCH_SINGLE_POST_SUCCEED } from "../types";

const INITIAL_STATE = {
    posts: [],
};

export const postReducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case FETCH_POSTS_SUCCEED:
            return {
                ...state,
                posts: action.payload,
            };
        case FETCH_SINGLE_POST_SUCCEED:
            return {
                ...state,
                posts: action.posts,
            };
        default:
            return state;
    }
};
