import {useState} from 'react';

const Difficulty = () => {

    const[difficulty, setDifficulty] = useState('Easy');

    const easy = () => {
        setDifficulty('Easy')
    }

    const hard = () => {
        setDifficulty('Hard')
    }

    return <div>
            <div id='difficulty'>{difficulty}</div>
            <br></br>
            <button id='easy' onClick={easy}>EASY</button>
            <button id='hard' onClick={hard}>HARD</button>

    </div>
}

export default Difficulty;