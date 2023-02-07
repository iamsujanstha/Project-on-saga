import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { MdOutlineDelete } from "react-icons/md";
import { deletePost, fetchSinglePost } from "../../../redux/actions";
import { useTranslation } from "react-i18next";
import "./posts.css";
// import ConfirmationModel from "../../../../common/modal/ConfirmationModal";
import { useDispatch } from "react-redux";

interface PostsProps {
  posts: any;
}
const Posts = ({ posts }: PostsProps) => {
  const authState = localStorage.getItem("logged");
  // const [showModal, setShowModal] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleDelete = (id: number) => {
    // setShowModal(true);
    dispatch(deletePost(id));
  };

  const handleUpdate = (id: number) => {
    navigate(`/admin/edit-post/${id}`);
    dispatch(fetchSinglePost({ id }));
  };

  return (
    <div className="all-posts">
      <Helmet>
        <title>Blogs Homepage</title>
        <meta name="Blog Homepage" content="List of all the blogs." />
      </Helmet>
      {posts.map((post: any) => (
        <div className="post" key={post.id}>
          <div>
            <Link className="link" to={`/posts/${post.id}`}>
              <h3 className="title">{post.title}</h3>
            </Link>
          </div>
          {authState && (
            <div className="btn-group">
              <div className="icon-btn">
                <button
                  className="btn btn-success btn-sm"
                  onClick={() => handleUpdate(post.id)}
                >
                  <BiEdit size={20} /> {t("Edit")}
                </button>
              </div>
              <div className="icon-btn">
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(post.id)}
                >
                  <MdOutlineDelete size={20} />
                  {t("Delete")}
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
      {/* {showModal && (
                <ConfirmationModel
                    showModalAction={showModal}
                    customMessage={"Do you want to delete this post?"}
                    handleCloseModalAction={handleClose}
                    handleApproveRejectAction={handleApprove}
                />
            )} */}
    </div>
  );
};

export default Posts;
