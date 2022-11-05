import React from "react";
import NamedButton from "../components/namedButton/NamedButton";
import Panel from "../components/panel/Panel";

const MainMenu = ({ characters }) => {
    return (
        <Panel>
            {characters.map((character) => (
                <NamedButton key={character.name} character={character} />
            ))}
        </Panel>
    );
};

export default MainMenu;
