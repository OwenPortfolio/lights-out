import Box from '../components/Box';
import {useState} from 'react';

const Board = () => {
    
    const [id, setId] = useState('');
    let fixId = (event) => {
        setId(event.target.parentElement.id)
        clickTile(id)
    }
    const clickTile = (id) => {
        console.log(id)
        const neighbours = [(id[0] + (id[1] - 1))]
        const neighbour = document.getElementById(neighbours[0]);
        const light = neighbour.children[0];
        light.click();
    }
    
    return <section class="gameBoard">
        <div class="grid-container">
            <div class="tile" id="A1" onClick={fixId}><Box/></div>
            <div class="tile" id="A2" onClick={fixId}><Box/></div>
            <div class="tile" id="A3" onClick={fixId}><Box/></div>
            <div class="tile" id="A4" onClick={fixId}><Box/></div>
            <div class="tile" id="B1" onClick={fixId}><Box/></div>
            <div class="tile" id="B2" onClick={fixId}><Box/></div>
            <div class="tile" id="B3" onClick={fixId}><Box/></div>
            <div class="tile" id="B4" onClick={fixId}><Box/></div>
            <div class="tile" id="C1" onClick={fixId}><Box/></div>
            <div class="tile" id="C2" onClick={fixId}><Box/></div>
            <div class="tile" id="C3" onClick={fixId}><Box/></div>
            <div class="tile" id="C4" onClick={fixId}><Box/></div>
            <div class="tile" id="D1" onClick={fixId}><Box/></div>
            <div class="tile" id="D2" onClick={fixId}><Box/></div>
            <div class="tile" id="D3" onClick={fixId}><Box/></div>
            <div class="tile" id="D4" onClick={fixId}><Box/></div>

        </div>


    </section>
}

export default Board;