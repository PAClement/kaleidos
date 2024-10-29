import React, {useEffect, useState} from 'react';

const RoundBegin = (props) => {

    const [timeLeft, setTimeLeft] = useState(5);
    const [displayValueTime, setDisplayValueTime] = useState('');

    useEffect(() => {
        if (timeLeft === 0) return;

        const intervalId = setInterval(() => {
            setTimeLeft(prevTime => prevTime - 1);
        }, 1000);

        switch (timeLeft) {
            case 5:
                setDisplayValueTime(`La manche ${props.currentRound} va commencer !`);
                break;
            case 4:
                setDisplayValueTime('3');
                break;
            case 3:
                setDisplayValueTime('2');
                break;
            case 2:
                setDisplayValueTime('1');
                break;
            case 1:
                setDisplayValueTime("C'est parti !");
                break;
            default:
                setDisplayValueTime('');
        }

        return () => clearInterval(intervalId);
    }, [timeLeft]);

    return (
        <div className={'grid h-screen place-items-center'}>
            <p className={'text-center text-6xl'}>{displayValueTime}</p>
            <div className={'flex flex-col gap-5 items-center'}>
                <span className={'text-4xl'}>Lettre </span>
                <span className={'text-4xl'}>{props.letter}</span>
            </div>
        </div>
    );
};

export default RoundBegin;