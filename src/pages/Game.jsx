import React, {useState} from 'react';
import SetupRound from "./SetupRound";
import Play from "./Play";
import LocalService from "../services/localService";
import Button from "../components/atoms/Button";


const Game = () => {

    const [gameIsStarted, setGameIsStarted] = useState(false);
    const [roundFinish, setRoundFinish] = useState(false);
    const [roundWillStart, setRoundWillStart] = useState(true);
    const [gameIsFinish, setGameIsFinish] = useState(false);

    const [round, setRound] = useState(0);
    const [time, setTime] = useState(0);

    const [letter, setLetter] = useState('');
    const [currentRound, setCurrentRound] = useState(1)

    const generateRandomLetter = () => {
        const alphabet = 'ABCDEFIJLMNOPRSTUV';
        const randomIndex = Math.floor(Math.random() * alphabet.length);
        return alphabet[randomIndex];
    };

    const startGame = () => {
        console.log('I started game');

        setRound(LocalService.getItem('round'));
        setTime(LocalService.getItem('time'));

        startRound();
    };

    const startRound = () => {
        console.log('start round')
        setGameIsStarted(true);
        setLetter(generateRandomLetter());
        // Logic for starting a round
        setTimeout(() => {
            setRoundFinish(false);
            setRoundWillStart(false);

            setTimeout(() => {
                if (currentRound === round) {
                    endGame();
                } else {
                    endRound();
                }
            }, 1000);

        }, 1000);
    };

    const endRound = () => {
        // Logic for ending a round
        setRoundFinish(true);
        setCurrentRound(currentRound + 1);
    };

    const endGame = () => {
        // Logic for ending the game
        setRoundFinish(true);
        setGameIsFinish(true);
    };

    const finishGame = () => {
        setGameIsStarted(false);
    }

    const resetParameter = () => {

    }

    return (
        <>
            {gameIsStarted ?
                <>
                    {roundFinish ?
                        <>
                            {gameIsFinish ?
                                <>
                                    <p>La partie est terminé</p>
                                    <p>Retourner au menu</p>
                                    <Button type="button" onClick={finishGame} name={`Commencer Round ${currentRound}`}
                                            color={"bg-purple-700 hover:bg-purple-800 focus:ring-purple-300"}/>
                                </>
                                :
                                <>
                                    <p>Le round est terminé</p>
                                    <p>affichage d'un bouton pour passer au second round</p>
                                    <Button type="button" onClick={startGame} name={`Commencer Round ${currentRound}`}
                                            color={"bg-purple-700 hover:bg-purple-800 focus:ring-purple-300"}/>
                                </>
                            }

                        </>
                        :
                        <>
                            {roundWillStart ?
                                <p>Le round va commencer</p>
                                :
                                <Play timer={time} letter={letter} currentRound={currentRound} rounds={round}/>
                            }
                        </>
                    }
                </>
                :
                <>
                        <SetupRound startFunction={startGame}/>
                </>
            }
        </>
    );
};

export default Game;