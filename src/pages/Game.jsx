import React, {useState} from 'react';
import SetupRound from "./SetupRound";
import Play from "./Play";
import LocalService from "../services/localService";


const Game = () => {

    const [roundStart, setRoundStart] = useState(false);
    const [round, setRound] = useState(0);
    const [time, setTime] = useState(0);

    function startGame(){
        console.log('I started game');

        setRound(LocalService.getItem('round'));
        setTime(LocalService.getItem('time'));
    }

    return (
        <>
            <SetupRound startFunction={startGame} />
            {roundStart && <Play />}
        </>
    );
};

export default Game;