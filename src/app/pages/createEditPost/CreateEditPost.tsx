import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { createPost, updatePost } from "../../redux/actions";
import "./createEditPost.css";
import { useDispatch, useSelector } from "react-redux";

const CreatePost = () => {
  const { t } = useTranslation<"translation", undefined>();
  const dispatch = useDispatch();
  const { id } = useSelector((state: any) => state.posts.post);
  const navigate = useNavigate();

  const post = useSelector((state: any) => state.posts.post);

  const [postData, setPostData] = useState({
    title: "",
    body: "",
  });

  //To populate the data
  useEffect(() => {
    if (id) {
      setPostData(post);
    }
  }, [post]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (post) {
      const updatedPostData = { id, ...postData };
      dispatch(updatePost(updatedPostData));
    } else {
      dispatch(createPost(postData));
    }
    setPostData({
      title: "",
      body: "",
    });

    setTimeout(() => {
      navigate("/");
    }, 400);
  };

  return (
    <div className="wrapper">
      <Helmet>
        <title>Create Post</title>
        <meta
          name="This is the new post creating page."
          content="Create post page"
        />
      </Helmet>
      <div className="create-form">
        <form onSubmit={handleSubmit}>
          {!id ? (
            <h2 className="h1 my-3">{t("create_post")}</h2>
          ) : (
            <h2>{t("Edit")}</h2>
          )}
          <div className="form-container">
            <label htmlFor="Title">
              <b>{t("Title")}:</b>
            </label>
            <input
              onChange={(e) =>
                setPostData({ ...postData, title: e.target.value })
              }
              name="title"
              className="form-control"
              value={postData.title}
              type="text"
            />
            <label htmlFor="Description">
              <b>{t("Description")}:</b>
            </label>
            <textarea
              onChange={(e) =>
                setPostData({ ...postData, body: e.target.value })
              }
              value={postData.body}
              name="body"
              className="form-control"
              rows={5}
              cols={50}
            />
            <button className="btn btn-success btn-md mt-4" type="submit">
              {id ? t("Edit_post") : t("create")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
