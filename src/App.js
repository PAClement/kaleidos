import './App.css';
import Button from "./components/atoms/Button";

function App() {
    return (
        <div className={"grid h-screen place-items-center"}>
            <div>
                <h1 className={"text-6xl text-center font-bold mb-10"}>
                    Welcome to le jeu
                </h1>
                <div className={"flex justify-center"}>
                    <Button name={"Commencer une partie"} color={"indigo"}></Button>
                </div>
                <div className={"flex justify-center"}>
                    <Button name={"Voir les règles"} color={"gray"}></Button>
                </div>
            </div>
        </div>
    );
}

export default App;
