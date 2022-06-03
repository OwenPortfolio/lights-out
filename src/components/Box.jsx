import {useState} from 'react';

const Box = () => {

    const winCheck = (event) => {
            document.getElementById('WinChecker').click();
    }    

    const[isOn, setIsOn] = useState(true);

    const lightswitch = (event) => {
        setIsOn(current => !current);
        console.log('light switched')
        const id = event.target.parentElement.id;
        swapNeighbours(id, event)
        setTimeout(
            function () {
                winCheck();
            }, 250
        )
    }
    const swapNeighbours = (id, event) => {
        let row = id[0];
        let column = id[1]
        
        if(row !== 'A'){
            let idShift = {A:'', B:'A', C:'B', D:'C'}
            let topNeighbourId = idShift[row] + column;
            let topNeighbour = document.getElementById(topNeighbourId).firstChild;
            if(event.clientX !== 0){
                topNeighbour.click();
            }
        }   

        if(column !== '1'){
            let leftNeighbourId = row + (column -1)
            let leftNeighbour = document.getElementById(leftNeighbourId).firstChild;
            if(event.clientX !== 0){
                leftNeighbour.click();
            }
        }
    }

    return <div class="light" style={{backgroundColor: isOn ? '#21e171' : ''}} onClick={lightswitch}></div>
}

export default Box;