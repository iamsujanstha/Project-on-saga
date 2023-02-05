import React from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { MdOutlineDelete } from "react-icons/md";
import { deletePost, updatePost } from "../../../redux/actions";
import { useTranslation } from "react-i18next";
import "./posts.css";

interface PostsProps {
    posts: any;
}
const Posts = ({ posts }: PostsProps) => {
    const authState = localStorage.getItem("logged");
    const navigate = useNavigate();
    const { t } = useTranslation();
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
                                    onClick={() => {
                                        updatePost(post.id);
                                        navigate(`/admin/edit/${post.id}`);
                                    }}
                                    className="btn btn-success btn-sm"
                                >
                                    <BiEdit size={20} /> {t("Edit")}
                                </button>
                            </div>
                            <div className="icon-btn">
                                <button
                                    onClick={() => {
                                        deletePost(post.id);
                                    }}
                                    className="btn btn-danger btn-sm"
                                >
                                    <MdOutlineDelete size={20} />
                                    {t("Delete")}
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Posts;
