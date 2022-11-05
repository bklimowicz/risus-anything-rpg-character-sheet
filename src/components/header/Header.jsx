import React from "react";
import "./Header.scss";

const Header = ({ headerTitle }) => {
    return (
        <div class="header">
            <h1>{headerTitle}</h1>
            <hr />
        </div>
    );
};

export default Header;
