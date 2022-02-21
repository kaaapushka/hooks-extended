import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogOut, onLogin, isAuth }) => {
    return (
        <>
            {isAuth === "false" ? (
                <button className="btn btn-danger" onClick={() => onLogOut()}>
                    Выйти из системы
                </button>
            ) : (
                <button className="btn btn-primary" onClick={() => onLogin()}>
                    Войти
                </button>
            )}
        </>
    );
};

SimpleComponent.propTypes = {
    onLogOut: PropTypes.func,
    onLogin: PropTypes.func,
    isAuth: PropTypes.string
};

export default SimpleComponent;
