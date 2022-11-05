import React from "react";
import "./NamedButton.scss";

const NamedButton = ({ character }) => {
    return (
        <div className="button">
            <button>{character.name}</button>
        </div>
    );
};

export default NamedButton;
