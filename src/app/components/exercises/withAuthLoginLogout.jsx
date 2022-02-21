import React, { useState } from "react";

const withAuthLoginLogout = (Component) => (props) => {
    const [isAuth, setIsAuth] = useState("false");

    const handleLogin = () => {
        setIsAuth((prevState) => (prevState === "false" ? "true" : "false"));
        localStorage.setItem("user", isAuth);
    };

    const handleLogOut = () => {
        setIsAuth((prevState) => (prevState === "true" ? "false" : "true"));
        localStorage.setItem("user", isAuth);
    };

    const isLogin = localStorage.getItem("user");
    return (
        <>
            {" "}
            <Component
                {...props}
                isAuth={isLogin}
                onLogin={handleLogin}
                onLogOut={handleLogOut}
            />
        </>
    );
};

export default withAuthLoginLogout;
