import React, {useEffect} from 'react';

const Play = (props) => {

    useEffect(() => {

    }, []);

    return (
        <div className={"flex"}>
            <div className={"w-4/5 "}>
                <img src="/assets/img/game/kaleidos.jpg" className={'max-h-screen max-w-screen'} alt="kaleidos image"/>
            </div>
            <div className={"max-w-1/5 flex flex-col justify-center items-center"}>
                <h3 className={"text-5xl mb-10"}>00 : 00</h3>
                <h2 className={"text-3xl"}>Round {props.round}</h2>
            </div>
        </div>
    );
};

export default Play;
