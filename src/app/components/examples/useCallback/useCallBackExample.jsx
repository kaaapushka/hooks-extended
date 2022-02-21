import React, { useState, useRef, useEffect, useCallback } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const UseCallBackExample = () => {
    const [data, setData] = useState({});

    const withOutCallBack = useRef(0);
    const withCallBack = useRef(0);

    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };

    // Without CallBack
    const vlidateWithOutCallBack = (data) => {
        console.log("data", data);
    };

    useEffect(() => {
        withOutCallBack.current++;
    }, [vlidateWithOutCallBack]);

    // With CallBack
    const vlidateWithCallBack = useCallback((data) => {
        console.log("data", data);
    }, []);

    useEffect(() => {
        withCallBack.current++;
    }, [vlidateWithCallBack]);

    useEffect(() => {
        vlidateWithOutCallBack(data);
        vlidateWithCallBack(data);
    }, [data]);

    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <Divider />
            <p>Render withOutCallBack: {withOutCallBack.current}</p>
            <p>Render withCallBack: {withCallBack.current}</p>
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                type="email"
                className="form-control"
                id="email"
                value={data.email || ""}
                name="email"
                onChange={handleChange}
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
