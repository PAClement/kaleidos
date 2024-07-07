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

    const [maxRound, setMaxRound] = useState(0);
    const [timePerRound, setTimePerRound] = useState(0);

    const [letter, setLetter] = useState('');
    const [currentRound, setCurrentRound] = useState(1);
    const [img, setImg] = useState('');

    const [imgUseInParty, setImgUseInParty] = useState([]);

    const generateRandomLetter = () => {
        const alphabet = 'ABCDEFIJLMNOPRSTUV';
        const randomIndex = Math.floor(Math.random() * alphabet.length);
        return alphabet[randomIndex];
    };

    const getImg = () => {
        let imgIsOk = true;
        do {
            imgIsOk = true;
            const tempImg = `kaleidos${Math.floor(Math.random() * 7) + 1}.jpg`;

            if (imgUseInParty.length > 0) {
                imgUseInParty.forEach(target => {
                    if (target === tempImg) {
                        imgIsOk = false;
                    }
                });
            }
            if (imgIsOk) {
                setImgUseInParty(imgUseInParty => [...imgUseInParty, tempImg]);
                setImg(tempImg);
            }
        } while (!imgIsOk);
    };

    const startGame = () => {
        console.log('I started game');

        setMaxRound(LocalService.getItem('round'));
        setTimePerRound(LocalService.getItem('time'));
        setGameIsStarted(true);
        setImgUseInParty([]);

        startRound();
    };

    const startRound = () => {
        console.log('start round')
        setLetter(generateRandomLetter());
        getImg();

        // Logic for starting a round
        setTimeout(() => {
            setRoundFinish(false);
            setRoundWillStart(false);

            setTimeout(() => {
                if (currentRound === maxRound) {
                    endLastRound();
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

    const endLastRound = () => {
        // Logic for ending the game
        setRoundFinish(true);
        setGameIsFinish(true);
    };

    const finishGame = () => {
        setGameIsStarted(false);
        resetParameter()
    }

    const resetParameter = () => {
        setCurrentRound(1)
        setLetter('')
    }

    return (<>
        {gameIsStarted ? <>
            {roundFinish ? <>
                {gameIsFinish ? <>
                    <p>La partie est terminé</p>
                    <p>Retourner au menu</p>
                    <Button type="button" onClick={finishGame} name={`Commencer Round ${currentRound}`}
                            color={"bg-purple-700 hover:bg-purple-800 focus:ring-purple-300"}/>
                </> : <>
                    <p>Le round est terminé</p>
                    <p>affichage d'un bouton pour passer au second round</p>
                    <Button type="button" onClick={startRound} name={`Commencer Round ${currentRound}`}
                            color={"bg-purple-700 hover:bg-purple-800 focus:ring-purple-300"}/>
                </>}

            </> : <>
                {roundWillStart ? <p>Le round va commencer</p> :
                    <Play timer={timePerRound} letter={letter} currentRound={currentRound} rounds={maxRound}
                          img={'/assets/img/game/' + img}/>}
            </>}
        </> : <>
            <SetupRound startFunction={startGame}/>
        </>}
    </>);
};

export default Game;