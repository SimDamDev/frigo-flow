import React from "react";
import { Button } from "antd";
import {
    GoogleOutlined,
    GithubOutlined,
    PlusOutlined,
} from "@ant-design/icons";

function SocialLogin({ image, onClick }) {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Button
                icon={<GoogleOutlined />}
                shape="circle"
                size="large"
                onClick={() => onClick("google")}
                style={{ marginRight: "8px" }}
            />
            <Button
                icon={<GithubOutlined />}
                shape="circle"
                size="large"
                onClick={() => onClick("github")}
                style={{ marginRight: "8px" }}
            />
            <Button
                icon={<PlusOutlined />}
                shape="circle"
                size="large"
                onClick={() => onClick("plus")}
            />
        </div>
    );
}

export default SocialLogin;
