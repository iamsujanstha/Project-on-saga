import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPosts } from "../../redux/actions/index";
import Posts from "../blog/posts/Posts";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import Pagination from "../../components/pagination/Pagination";


const perPageCount = 10
const Home = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state: any) => state.posts);
    const { t } = useTranslation();
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(perPageCount);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.posts?.slice(indexOfFirstPost, indexOfLastPost);

    useEffect(() => {
        dispatch(fetchAllPosts());
    }, []);

    return (
        <div>
            <Helmet>
                <title>Blogs Homepage</title>
                <meta name="All latest contents." content="Latest blog posts" />
            </Helmet>
            <div className=" mt-3">
                <h1 className="blog mb-3">{t("All Posts")}</h1>
                <h3 className="sub-blog mb-5">{t("Latest news posts")}</h3>
                <div className="">
                    <div className="blog_wrapper">
                        <Posts posts={currentPosts} />
                    </div>
                </div>
            </div>
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts.posts?.length}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
};

export default Home;
