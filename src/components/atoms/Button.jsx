import React from 'react';

const Button = (props) => {

    return (
        <button type={props.type}
                onClick={props.onClick}
                className={`text-white ${props.color} focus:ring-4 font-medium
                    rounded-lg text-xl px-10 py-5 me-2 mb-2 focus:outline-none`}>
            {props.name}
        </button>
    );
};

export default Button;