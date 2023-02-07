import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import "./unauthenticated.css"

const Unauthenticated = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="container_wrapper">
      <Helmet>
        <title>Unauthenticated Error</title>
        <meta
          name="Unauthenticated page to show error if protected route is entered without login."
          content="Unauthenticated Error"
        />
      </Helmet>
      <div className="un-auth">
        <h1>401</h1>
        <p>{t("You_need_to_be_logged_in_as_Admin")}.</p>
        <button
          className="btn btn-success"
          onClick={() => {
            navigate("/login");
          }}
        >
          {t("Login")}
        </button>
      </div>
    </div>
  );
};

export default Unauthenticated;
