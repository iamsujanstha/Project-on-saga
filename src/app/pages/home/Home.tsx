import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPosts } from "./redux/actions";

const Home = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state: any) => state.posts);

    useEffect(() => {
        dispatch(fetchAllPosts());
    }, []);

    console.log(posts.posts);

    return (
        <>
            <h1>All Posts</h1>
            {posts.posts.length > 0 &&
                posts.posts.map((post: any) => {
                    return (
                        <div key={post.id}>
                            <p>{post.title}</p>
                        </div>
                    );
                })}
        </>
    );
};

export default Home;
