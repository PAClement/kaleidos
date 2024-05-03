import './App.css';
import { Link } from 'react-router-dom'
import Button from "./components/atoms/Button";

function App() {
    return (
        <div className={"grid h-screen place-items-center"}>
            <div>
                <h1 className={"text-6xl text-center font-bold mb-10"}>
                    Welcome to le jeu
                </h1>
                <div className={"flex justify-center"}>
                    <Link to="/game">
                        <Button name={"Commencer une partie"} color={"bg-indigo-700 hover:bg-indigo-800 focus:ring-indigo-300"}></Button>
                    </Link>
                </div>
                <div className={"flex justify-center"}>
                    <Button name={"Voir les règles"} color={"bg-gray-700 hover:bg-gray-800 focus:ring-gray-300"}></Button>
                </div>
            </div>
        </div>
    );
}

export default App;
