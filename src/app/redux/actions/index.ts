import {
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCEED,
    FETCH_SINGLE_POST_REQUEST,
    FETCH_SINGLE_POST_SUCCEED,
    CREATE_POST_REQUEST,
    CREATE_POST_SUCCEED,
    UPDATE_POST_REQEUST,
    UPDATE_POST_SUCCEED,
    DELETE_POST_REQUEST,
    DELETE_POST_SUCCEED,
    SEARCH_POST_REQUEST,
    SEARCH_POST_SUCCEED,
} from "../types";

export const fetchAllPosts: any = (payload: any) => ({
    type: FETCH_POSTS_REQUEST,
    payload,
});

export const fetchAllPostsSucceed: any = (payload: any) => ({
    type: FETCH_POSTS_SUCCEED,
    payload,
});

export const fetchSinglePost: any = (payload: any) => ({
    type: FETCH_SINGLE_POST_REQUEST,
    payload,
});

export const fetchSinglePostSucceed = (payload: any) => {
    return {
        type: FETCH_SINGLE_POST_SUCCEED,
        payload,
    };
};

export const createPost = (payload: any) => ({
    type: CREATE_POST_REQUEST,
    payload,
});

export const createPostSucceed = (payload: any) => ({
    type: CREATE_POST_SUCCEED,
    payload,
});

export const updatePost = (payload: any) => ({
    type: UPDATE_POST_REQEUST,
    payload,
});

export const updatePostSucceed = (payload: any) => ({
    type: UPDATE_POST_SUCCEED,
    payload,
});

export const deletePost = (payload: any) => ({
    type: DELETE_POST_REQUEST,
    payload,
});

export const deletePostSucceed = (payload: any) => ({
    type: DELETE_POST_SUCCEED,
    payload,
});

export const searchPost = (payload: any) => ({
    type: SEARCH_POST_REQUEST,
    payload,
});

export const searchPostSucceed = (payload: any) => ({
    type: SEARCH_POST_SUCCEED,
    payload,
});
