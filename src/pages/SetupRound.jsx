import React, {useState} from 'react';
import Button from "../components/atoms/Button";
import LocalService from "../services/localService";

const SetupRound = (props) => {

    const customClass = "p-3 px-5 rounded hover:bg-purple-600 active:bg-purple-500 cursor-pointer";
    const activeClass = "bg-purple-500 hover:bg-purple-500";
    const rounds = [2, 3, 4, 5, 6, 7];

    const [selectedRound, setSelectedRound] = useState(6);
    const [selectedTime, setSelectedTime] = useState(120);

    const handleSubmit = (event) => {
        event.preventDefault();
        LocalService.setItem('round', selectedRound);
        LocalService.setItem('time', selectedTime);

        props.startFunction();
    }

    return (<div className={"flex flex-col items-center justify-center"}>
            <form onSubmit={handleSubmit}>
                <div className={"my-10"}>
                    <h2 className={"text-2xl text-center"}>Nombre de round</h2>
                    <div className={"flex justify-around my-10 gap-10 text-4xl"}>
                        {rounds.map((round) => (<label key={round}>
                                <input
                                    className={'hidden'}
                                    type="radio"
                                    value={round}
                                    checked={selectedRound === round}
                                    onChange={(e) => setSelectedRound(parseInt(e.target.value))}
                                />
                                <span
                                    className={`${customClass} ${selectedRound === round ? activeClass : ''}`}>{round}</span>
                            </label>))}
                    </div>
                </div>
                <div className={"my-10"}>
                    <h2 className={"text-2xl text-center mb-5"}>Temps par round</h2>
                    <select
                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-white-500
                            focus:border-white-500 block w-full p-2.5 dark:bg-gray-700 dark:border-indigo-600 dark:placeholder-gray-400
                            dark:text-white dark:focus:ring-white-500 dark:focus:border-white-500 outline-0"
                        onChange={(e) => setSelectedTime(parseInt(e.target.value))}>
                        <option value="120000" defaultValue>2 min</option>
                        <option value="150000">2 min 30</option>
                        <option value="60000">1 min</option>
                        <option value="90000">1 min 30</option>
                    </select>
                </div>
                <div className={"flex justify-center"}>
                    <Button type="submit" name={"Start le jeu"}
                            color={"bg-purple-700 hover:bg-purple-800 focus:ring-purple-300"}></Button>
                </div>
            </form>
        </div>);
};

export default SetupRound;