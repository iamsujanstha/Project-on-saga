import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchPost } from "../../redux/actions";
import "./searchPost.css";

const SearchQuery = () => {
    const [searchItem, setSearchItem] = useState<string>("");
    const dispatch = useDispatch()
    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch(searchPost(searchItem))
    };
    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchItem}
                onChange={(e) => setSearchItem(e.target.value)}
            />

            <button className="btn btn-info my-2 my-sm-0" type="submit">
                Search
            </button>
        </form>
    );
};

export default SearchQuery;
