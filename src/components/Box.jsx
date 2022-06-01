import {useState} from 'react';

const Box = () => {

    const[isOn, setIsOn] = useState(true);
    
    const lightswitch = (event) => {
        setIsOn(current => !current);
        const id = event.target.parentElement.id;
        swapNeighbours(id, event)
    }
    const swapNeighbours = (id, event) => {
        let row = id[0];
        let column = id[1]

        let idShift = {A:'', B:'A', C:'B', D:'C'}
        console.log(idShift[row]);
        let leftNeighbourId = row + (column -1)
        let leftNeighbour = document.getElementById(leftNeighbourId).firstChild;
        if(event.clientX !== 0){
        leftNeighbour.click();

        let topNeighbourId = idShift[row] + column;
        let topNeighbour = document.getElementById(topNeighbourId).firstChild;
        if(event.clientX !== 0){
            topNeighbour.click();
        }
        }
    }
    // const neighbourSwitch = () => {
    //     console.log("triggered neighbourSwitch")
    //     setIsOn(current => !current);
    // }
    return <div class="light" style={{backgroundColor: isOn ? '#21e171' : ''}} onClick = {lightswitch} ></div>
}

export default Box;