import React from 'react';

const Button = (props) => {

    return (
        <button type="button"
                className={`text-white bg-${props.color}-700 hover:bg-${props.color}-800 focus:ring-4 focus:ring-${props.color}-300 font-medium
                    rounded-lg text-xl px-10 py-5 me-2 mb-2 dark:bg-${props.color}-600 dark:hover:bg-${props.color}-700 focus:outline-none
                    dark:focus:ring-${props.color}-800`}>
            {props.name}
        </button>
    );
};

export default Button;