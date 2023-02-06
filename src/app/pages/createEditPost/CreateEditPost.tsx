import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { createPost, fetchAllPosts, fetchSinglePost, updatePost } from "../../redux/actions";
import "./createEditPost.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const CreatePost = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { id } = useParams();
    const navigate = useNavigate();

    const post = useSelector((state: any) => state.posts.post);

    console.log(post);
    const [postData, setPostData] = useState({
        title: "",
        body: "",
    });

    //To populate the data after api call
    useEffect(() => {
        dispatch(fetchSinglePost({id}));
        if (id) {
            setPostData(post);
        }
    }, [id]);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        {
            id ? dispatch(updatePost(postData)) : dispatch(createPost(postData));
        }
        setPostData({
            title: "",
            body: "",
        });
        // navigate("/");
    };

    return (
        <div className="wrapper">
            <Helmet>
                <title>Create Post</title>
                <meta name="This is the new post creating page." content="Create post page" />
            </Helmet>
            <div className="create-form">
                <form onSubmit={handleSubmit}>
                    {!id ? <h1>{t("Create Post")}</h1> : <h1>{t("Edit Post")}</h1>}
                    <div className="form-container">
                        <label htmlFor="Title">{t("Title")}</label>
                        <input
                            onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                            name="title"
                            className="form-control"
                            value={postData.title}
                            type="text"
                        />
                        <label htmlFor="Description">{t("Body")}</label>
                        <textarea
                            onChange={(e) => setPostData({ ...postData, body: e.target.value })}
                            value={postData.body}
                            name="body"
                            className="form-control"
                            rows={5}
                            cols={50}
                        />
                        <button className="btn btn-success btn-md mt-4" type="submit">
                            {id ? t("Edit") : t("Create")}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreatePost;
