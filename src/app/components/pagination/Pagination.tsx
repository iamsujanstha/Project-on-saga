import React from "react";
import "./Pagination.css";

interface PaginationProps {
    postsPerPage: number;
    totalPosts: number;
    setCurrentPage: any;
}

const Pagination = ({ postsPerPage, totalPosts, setCurrentPage }: PaginationProps) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav aria-label="...">
            <ul className="pagination">
                {pageNumbers.map((number) => (
                    <li key={number} className=" text-center page-item">
                        <a onClick={() => setCurrentPage(number)} className="page-link">
                           {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
