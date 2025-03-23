import {useState} from 'react';

export const SimpleButton = () => {
    const [state, setState] = useState(false);
    const handleClick =()=>{
        setState((prevState)=> !prevState);
    };
    return <button onClick={handleClick}>
        {state? 'ON': 'OFF'}
    </button>
};