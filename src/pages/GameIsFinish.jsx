import React from 'react';
import Button from "../components/atoms/Button";

const GameIsFinish = (props) => {
    return (
        <div className={'grid h-screen place-items-center'}>
            <div className={'flex flex-col gap-10 items-center'}>
                <span className={'text-6xl'}>La partie est terminée</span>
                <Button type="button" onClick={props.finishGame} name={`Retourner au menu`}
                        color={"bg-purple-700 hover:bg-purple-800 focus:ring-purple-300"}/>
            </div>
        </div>
    );
};

export default GameIsFinish;