import {
    FETCH_POSTS_SUCCEED,
    FETCH_SINGLE_POST_SUCCEED,
    SEARCH_POST_SUCCEED,
    UPDATE_POST_SUCCEED,
    DELETE_POST_SUCCEED,
} from "../types";

const INITIAL_STATE = {
    posts: [],
    post: [],
    searchedPos: [],
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
                post: action.payload,
            };

        case SEARCH_POST_SUCCEED:
            return {
                ...state,
                posts: action.payload,
            };

        case UPDATE_POST_SUCCEED:
            return {
                ...state,
            };

        case DELETE_POST_SUCCEED:
            return {
                ...state,
            };

        default:
            return state;
    }
};
