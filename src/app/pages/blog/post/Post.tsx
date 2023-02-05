import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { fetchSinglePost } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import "./post.css"

const Post = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const post = useSelector((state: any) => state.posts.post);
    console.log(post);
    useEffect(() => {
        dispatch(fetchSinglePost({ id }));
    }, []);
    

    return (
        <div>
            <Helmet>
                <title>{post?.title}</title>
                <meta name="Blog Page" content={post?.body} />
            </Helmet>
            {!post ? (
                <p>Post is Loading...</p>
            ) : (
                <div className="container">
                    <h5 className="post-id"><span>Post ID: </span>{post.id}</h5>
                    <div className="post-body">
                        <h5 className="post-title"><span>Title: </span>{post.title}</h5>
                        <p>{post.body}.</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Post;
