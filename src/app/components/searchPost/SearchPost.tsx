import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { searchPost } from "../../redux/actions";
import "./searchPost.css";

const SearchPost = () => {
  const [searchItem, setSearchItem] = useState<string>("");
  const dispatch = useDispatch();
  const { t } = useTranslation<"translation", undefined>();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(searchPost(searchItem));
    setSearchItem("");
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

      <button className="btn btn-info mx-2 my-sm-0" type="submit">
        {t("Search")}
      </button>
    </form>
  );
};

export default SearchPost;
