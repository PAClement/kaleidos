import React, {useEffect, useState} from 'react';
import Button from "../components/atoms/Button";

const RoundFinish = (props) => {

    const [roundFinish, setRoundFinish] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setRoundFinish(false);
        }, 5000);
    }, []);

    return (
        <>
            {roundFinish ?
                <>
                    <p>PARTIE TERMINÉ</p>
                </>
                :
                <>
                    <div className={"flex"}>
                        <div className={"w-4/5 "}>
                            <img src={props.img} className={'max-h-screen max-w-screen'} alt="kaleidos_image"/>
                        </div>
                        <div className={"max-w-1/5 flex flex-col justify-center items-center"}>
                            <h4 className={"text-2xl mb-10"}>Lettre : {props.letter}</h4>
                            <Button type="button" onClick={props.startRound}
                                    name={`Commencer Round ${props.currentRound}`}
                                    color={"bg-purple-700 hover:bg-purple-800 focus:ring-purple-300"}/>
                        </div>
                    </div>
                </>}

        </>
    );
};

export default RoundFinish;