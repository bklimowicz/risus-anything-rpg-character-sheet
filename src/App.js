import "./App.scss";
import MainMenu from "./screens/MainMenu";
import Header from "./components/header/Header";

function App() {
    const player = [
        {
            name: "PlayerName1",
        },
        {
            name: "PlayerName2",
        },
    ];

    return (
        <div className="App">
            <Header headerTitle={`Postacie`} />
            <MainMenu characters={player} />
        </div>
    );
}

export default App;
