import {useState} from 'react';

const Box = () => {
    const[isOn, setIsOn] = useState('false');

    const lightswitch = (event) => {
        setIsOn(current => !current);
        const id = event.target.parentElement.id;
        console.log(id)
        neighbour(id)
        }
    const[count, setCount] = useState(0);

    const neighbour = (id) => {
        let neighbourId = id[0] + (id[1] -1)
        let light = document.getElementById(neighbourId).children[0]

        console.log(document.getElementById(id).children)
        light.click();
    }
    return <div class="light" style={{backgroundColor: isOn ? '#21e171' : ''}} onClick={lightswitch}></div>
}

export default Box;