import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CreatePost = () => {
  const { t } = useTranslation();
  const [postData, setPostData] = useState({
    title:'',
    body:''
  })
  const navigate = useNavigate();

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    // await createPost(data);
    navigate("/");
  };

  console.log(postData)
//   useEffect(() => {
//     if (isLoading) {
//       <h1>Loading..</h1>;
//     }
//   }, []);

  return (
    <div className="wrapper">
      <Helmet>
        <title>Create Blog</title>
        <meta
          name="This is the new blog creating page."
          content="Blog creating site."
        />
      </Helmet>
      <div className="edit_form">
        <form onSubmit={handleSubmit}>
          <h1>{t("Create_Post")}</h1>
          <div className="form-container">
            <label htmlFor="Title">{t("Title")}</label>
            <input
              onChange={(e)=>setPostData({...postData, title:e.target.value})}
              name="title"
              value={postData.title}
              type="text"
            />
            <label htmlFor="Description">{t("Title")}</label>
            <textarea
              onChange={(e)=>setPostData({...postData, body:e.target.value})}
              value={postData.body}
              name="body"
              rows={5}
              cols={50}
            />
            <button type="submit">
              {t("Create")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
