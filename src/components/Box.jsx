import {useState} from 'react';

const Box = () => {

    const[isOn, setIsOn] = useState(true);
    
    const lightswitch = (event) => {
        console.log(event)
        setIsOn(current => !current);
        const id = event.target.parentElement.id;
        swapNeighbour(id, event)
    }
    const swapNeighbour = (id, event) => {
        let neighbourId = id[0] + (id[1] -1)
        let neighbour = document.getElementById(neighbourId).firstChild;
        if(event.clientX != 0){
        neighbour.click();
        }
    }
    // const neighbourSwitch = () => {
    //     console.log("triggered neighbourSwitch")
    //     setIsOn(current => !current);
    // }
    return <div class="light" style={{backgroundColor: isOn ? '#21e171' : ''}} onClick = {lightswitch} ></div>
}

export default Box;