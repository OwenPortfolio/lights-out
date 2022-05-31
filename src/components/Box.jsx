import {useState} from 'react';

const Box = () => {

    const[isOn, setIsOn] = useState('false');
    const lightswitch = () => {
        setIsOn(current => !current);        
    }
    return <div class="light" style={{backgroundColor: isOn ? '#21e171' : ''}} onClick={lightswitch}></div>
}

export default Box;