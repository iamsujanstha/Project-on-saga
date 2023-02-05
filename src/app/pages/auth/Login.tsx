import React from "react";
import { useState } from "react";
import "./auth.style.css";
import { useDispatch } from "react-redux";
// import { setAuthLoggedIn } from "../services/ActionSlice";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const loggedId = Date.now();
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    const [logged, setLogged] = useState<boolean>(true);

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (loginData.email == "admin123@gmail.com" && loginData.password == "admin321") {
            setLoginData({
                email: "",
                password: "",
            });
            setLogged(true);
            localStorage.setItem("logged", "" + loggedId);
            navigate("/");
        }
        if (loginData.email !== "admin123@gmail.com" || loginData.password !== "admin321") {
            setLogged(false);
        }
    };

    return (
        <div className="form">
            <form className="mt-5" onSubmit={handleSubmit}>
                <h1 className="h3 mb-3 font-weight-normal">{t("Please Sign In")}</h1>
                <div className="mb-3">
                    <label className="form-label" htmlFor="emailAddress">
                        {t("Email address")}
                    </label>
                    <input
                        className="form-control"
                        onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                        name="email"
                        type="text"
                        value={loginData.email}
                        placeholder="Email Address"
                    />
                </div>
                <div className="mb-3">
                    <label className="sr-only" htmlFor="">
                        {t("Password")}
                    </label>
                    <input
                        name="password"
                        type="password"
                        value={loginData.password}
                        placeholder="Enter Password"
                        className="form-control"
                        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    />
                </div>

                <button className="btn btn-primary" type="submit">
                    {t("Login")}
                </button>
            </form>
            {!logged && <h1 className="login_error">Error Email or Password. </h1>}
        </div>
    );
};

export default Login;
