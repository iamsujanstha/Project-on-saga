import {
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCEED,
    FETCH_SINGLE_POST_REQUEST,
    FETCH_SINGLE_POST_SUCCEED,
} from "../types";

export const fetchAllPosts: any = (payload: any) => ({
    type: FETCH_POSTS_REQUEST,
    payload,
});

export const fetchAllPostsSucceed: any = (payload: any) => ({
    type: FETCH_POSTS_SUCCEED,
    payload,
});

export const fetchSinglePost: any = (id: any, payload: any) => ({
    type: FETCH_SINGLE_POST_REQUEST,
    id,
});

export const fetchSinglePostSucceed = (id: any, payload: any) => {
    return {
        type: FETCH_SINGLE_POST_SUCCEED,
        id,
    };
};
