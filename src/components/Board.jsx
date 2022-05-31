
import Box from '../components/Box';

const Board = () => {

    const clickTile = (event) => {
        console.log("clicked", event)
    }

    return <section class="gameBoard">
        <div class="grid-container">
            <div class="tile" onClick={clickTile}><Box/></div>
            <div class="tile" onClick={clickTile}><Box/></div>
            <div class="tile" onClick={clickTile}><Box/></div>
            <div class="tile" onClick={clickTile}><Box/></div>
            <div class="tile" onClick={clickTile}><Box/></div>
            <div class="tile" onClick={clickTile}><Box/></div>
            <div class="tile" onClick={clickTile}><Box/></div>
            <div class="tile" onClick={clickTile}><Box/></div>
            <div class="tile" onClick={clickTile}><Box/></div>
            <div class="tile" onClick={clickTile}><Box/></div>
            <div class="tile" onClick={clickTile}><Box/></div>
            <div class="tile" onClick={clickTile}><Box/></div>
            <div class="tile" onClick={clickTile}><Box/></div>
            <div class="tile" onClick={clickTile}><Box/></div>
            <div class="tile" onClick={clickTile}><Box/></div>
            <div class="tile" onClick={clickTile}><Box/></div>
        </div>


    </section>
}

export default Board;