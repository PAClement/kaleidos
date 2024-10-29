import React, {useEffect, useState} from 'react';

const Play = (props) => {
    const [time, setTime] = useState(props.timer);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prevTime) => {
                if (prevTime > 0) {
                    return prevTime - 1000;
                } else {
                    clearInterval(interval);
                    return 0;
                }
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [props.timer]);

    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);

    const formattedTime = `${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`;

    return (<div className={"flex"}>
            <div className={"w-4/5"}>
                <img src={props.img} className={'max-h-screen max-w-screen'} alt="kaleidos_image"/>
            </div>
            <div className={"max-w-1/5 flex flex-col justify-center items-center"}>
                <h4 className={"text-2xl mb-10"}>Lettre : {props.letter}</h4>
                <h3 className={"text-5xl mb-10"}>{formattedTime}</h3>
                <h2 className={"text-3xl"}>Round {props.currentRound}/{props.rounds}</h2>
            </div>
        </div>);
};
export default Play;
