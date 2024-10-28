import React from 'react';
import Button from "../components/atoms/Button";

const GameIsFinish = (props) => {
    return (
        <>
            <p>La partie est terminé</p>
            <p>Retourner au menu</p>
            <Button type="button" onClick={props.finishGame} name={`Retourner au menu`}
                    color={"bg-purple-700 hover:bg-purple-800 focus:ring-purple-300"}/>
        </>
    );
};

export default GameIsFinish;