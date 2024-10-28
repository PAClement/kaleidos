import React, {useEffect, useState} from 'react';
import SetupRound from "./SetupRound";
import Play from "./Play";
import RoundFinish from "./RoundFinish";
import LocalService from "../services/localService";
import GameIsFinish from "./GameIsFinish";
import RoundBegin from "./RoundBegin";


const Game = () => {

    const [gameIsStarted, setGameIsStarted] = useState(false);
    const [roundWillStart, setRoundWillStart] = useState(true);
    const [roundFinish, setRoundFinish] = useState(false);
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
        setMaxRound(LocalService.getItem('round'));
        setTimePerRound(LocalService.getItem('time'));
        setGameIsStarted(true);
        setImgUseInParty([]);
    };

    useEffect(() => {
        if (maxRound && timePerRound && gameIsStarted) {
            startRound();
        }
    }, [maxRound, timePerRound, gameIsStarted]);

    const startRound = () => {
        setLetter(generateRandomLetter());
        setRoundWillStart(true);
        setRoundFinish(false);
        getImg();

        // Logic for starting a round
        setTimeout(() => {
            //Round Begin
            setRoundFinish(false);
            setRoundWillStart(false);

            setTimeout(() => {
                //Round Finish
                if (currentRound === maxRound) {
                    endLastRound();
                } else {
                    endRound();
                }
            }, timePerRound);
        }, 3000);
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
        setCurrentRound(1);
        setLetter('');
        setRoundFinish(false);
        setGameIsFinish(false);
        setGameIsStarted(false);
        setRoundWillStart(true);
    }

    return (<>
        {gameIsStarted ? <>
            {roundFinish ? <>
                {gameIsFinish ? <>
                    <GameIsFinish finishGame={finishGame}/>
                </> : <>
                    <RoundFinish letter={letter} img={`/assets/img/game/${img}`} startRound={startRound} currentRound={currentRound}/>
                </>}

            </> : <>
                {roundWillStart ? <RoundBegin/> :
                    <Play timer={timePerRound} letter={letter} currentRound={currentRound} rounds={maxRound}
                          img={`/assets/img/game/${img}`}/>}
            </>}
        </> : <>
            <SetupRound startFunction={startGame}/>
        </>}
    </>);
};

export default Game;