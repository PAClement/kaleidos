import React from 'react';

const Play = (props) => {

    return (
        <div className={"flex"}>
            <div className={"w-4/5 "}>
                <img src={props.img} className={'max-h-screen max-w-screen'} alt="kaleidos_image"/>
            </div>
            <div className={"max-w-1/5 flex flex-col justify-center items-center"}>
                <h4 className={"text-2xl mb-10"}>Lettre : {props.letter}</h4>
                <h3 className={"text-5xl mb-10"}>00 : 00</h3>
                <h2 className={"text-3xl"}>Round {props.currentRound}/{props.rounds}</h2>
            </div>
        </div>
    );
};

export default Play;
