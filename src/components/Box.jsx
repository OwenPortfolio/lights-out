import {useState} from 'react';

const Box = () => {

    const winCheck = (event) => {
            document.getElementById('WinChecker').click();
    }    

    const[isOn, setIsOn] = useState(true);

    const lightswitch = (event) => {
        setIsOn(current => !current);
        const id = event.target.parentElement.id;
        swapNeighbours(id, event)
        setTimeout(
            function () {
                winCheck();
            }, 100
        )
    }
    const swapNeighbours = (id, event) => {
        let row = id[0];
        let column = parseInt(id[1])
        
        if(row !== 'A'){
            let idShift = {B:'A', C:'B', D:'C', E:'D'}
            let topNeighbourId = idShift[row] + column;
            let topNeighbour = document.getElementById(topNeighbourId).firstChild;
            if(event.clientX !== 0){
                topNeighbour.click();
            }
        }   

        if(column !== 1){
            let leftNeighbourId = row + (column -1)
            let leftNeighbour = document.getElementById(leftNeighbourId).firstChild;
            if(event.clientX !== 0){
                leftNeighbour.click();
            }
        }

        if(row !== 'E'){
            let idShift = {A:'B', B:'C', C:'D', D:'E'}
            let bottomNeighbourId = idShift[row] + column;
            let bottomNeighbour = document.getElementById(bottomNeighbourId).firstChild;
            if(event.clientX !== 0){
                bottomNeighbour.click();
            }
        }   

        if(column !== 5){
            let rightNeighbourId = row + (column+1)
            let rightNeighbour = document.getElementById(rightNeighbourId).firstChild;
            if(event.clientX !== 0){
                rightNeighbour.click();
            }
        }
    }

    return <div class="light" style={{backgroundColor: isOn ? '#21e171' : '', borderColor: isOn ? 'yellow' : '', borderStyle: isOn ? 'solid' : ''}} onClick={lightswitch}></div>
}

export default Box;