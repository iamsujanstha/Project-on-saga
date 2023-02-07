import React from "react";
import { useState } from "react";
import "./login.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const { t } = useTranslation<"translation", undefined>();
  const navigate = useNavigate();
  const loggedId = Date.now();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [passwordType, setPasswordType] = useState<string>("password");
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [logged, setLogged] = useState<boolean>(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      loginData.email == "admin123@gmail.com" &&
      loginData.password == "admin321"
    ) {
      setLoginData({
        email: "",
        password: "",
      });
      setLogged(true);
      localStorage.setItem("logged", "" + loggedId);
      navigate("/");
    }
    if (
      loginData.email !== "admin123@gmail.com" ||
      loginData.password !== "admin321"
    ) {
      setLogged(false);
    }
  };

  const handlePassword = () => {
    setShowPassword((prev) => !prev);
    if (showPassword) {
      setPasswordType("password");
    } else {
      setPasswordType("text");
    }
  };

  return (
    <div className="form">
      <form className="mt-5" onSubmit={handleSubmit}>
        <h1 className="h3 mb-3 font-weight-normal">{t("Please_Sign_In")}</h1>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            {t("Email_address")}
          </label>
          <input
            className="form-control"
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
            name="email"
            type="text"
            id="email"
            value={loginData.email}
            placeholder="Email Address"
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="password">
            {t("Password")}
          </label>
          <div className="pwd-input">
            <input
              name="password"
              type={passwordType}
              id="password"
              value={loginData.password}
              placeholder="Password"
              className="form-control"
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
            />
            {loginData.password.length > 0 && (
              <i
                className={`fa-solid fa-${showPassword ? "eye" : "eye-slash"}`}
                style={{ cursor: "pointer" }}
                onClick={handlePassword}
              />
            )}
          </div>
        </div>

        <button className="btn btn-primary" type="submit">
          {t("login")}
        </button>
      </form>
      {!logged && <h3 className="login_error">Incorret Email or Password. </h3>}
    </div>
  );
};

export default Login;
