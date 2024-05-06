import React, {useState} from 'react';
import Button from "../components/atoms/Button";
import LocalService from "../services/localService";

const SetupRound = () => {

    const customClass = "border-b-2 p-3 hover:bg-purple-300 active:bg-purple-500 cursor-pointer";
    const activeClass = "bg-purple-500 hover:bg-purple-500";

    const [selectedRound, setSelectedRound] = useState(6);
    const [selectedTime, setSelectedTime] = useState(120);

    function handleSubmit(event) {
        event.preventDefault();
        LocalService.setItem('round', selectedRound);
        LocalService.setItem('time', selectedTime);
    }

    return (
        <div className={"flex flex-col items-center justify-center"}>
            <form onSubmit={handleSubmit}>
                <div className={"my-10"}>
                    <h2 className={"text-2xl text-center"}>Nombre de round</h2>
                    <div className={"flex justify-around my-10 gap-10 text-4xl"}>
                        <label>
                            <input
                                type="radio"
                                value="2"
                                checked={selectedRound === 2}
                                onChange={(e) => setSelectedRound(parseInt(e.target.value))}
                            />
                            <span className={`${customClass} ${selectedRound === 2 ? activeClass : ''}`}>2</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="4"
                                checked={selectedRound === 4}
                                onChange={(e) => setSelectedRound(parseInt(e.target.value))}
                            />
                            <span className={`${customClass} ${selectedRound === 4 ? activeClass : ''}`}>4</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="6"
                                checked={selectedRound === 6}
                                onChange={(e) => setSelectedRound(parseInt(e.target.value))}
                            />
                            <span className={`${customClass} ${selectedRound === 6 ? activeClass : ''}`}>6</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="8"
                                checked={selectedRound === 8}
                                onChange={(e) => setSelectedRound(parseInt(e.target.value))}
                            />
                            <span className={`${customClass} ${selectedRound === 8 ? activeClass : ''}`}>8</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="10"
                                checked={selectedRound === 10}
                                onChange={(e) => setSelectedRound(parseInt(e.target.value))}
                            />
                            <span className={`${customClass} ${selectedRound === 10 ? activeClass : ''}`}>10</span>
                        </label>
                    </div>
                </div>
                <div className={"my-10"}>
                    <h2 className={"text-2xl text-center"}>Temps par round</h2>
                    <div className="my-10">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Temps
                            en seconde</label>
                        <input type="number" min={0}
                               className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                               focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                               dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                               value={selectedTime} onChange={(e) => setSelectedTime(parseInt(e.target.value))}
                               required/>
                    </div>
                </div>
                <div className={"flex justify-center"}>
                    <Button type="submit" name={"Start le jeu"}
                            color={"bg-purple-700 hover:bg-purple-800 focus:ring-purple-300"}></Button>
                </div>
            </form>
        </div>
    );
};

export default SetupRound;