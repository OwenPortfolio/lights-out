const WinChecker = () => {

    let grid = ['A1', 'A2', 'A3', 'A4',
    'B1', 'B2', 'B3', 'B4',
    'C1', 'C2', 'C3', 'C4',
    'D1', 'D2', 'D3', 'D4']

    let lights = 0;

    const checkWins = () => {
        lights = 0;
        for(let i = 0; i <= grid.length; i++){
            let tile = document.getElementById(grid[i]).firstChild
            if(tile.style[0] === 'background-color'){
                console.log(lights)
                lights++;
            }
            if((lights) === 0){
                alert('You Win!')
                lights++
                document.getElementById('NewGameButton').click();
            }
        }



    }



 return <button id="WinChecker" onClick={checkWins}>HELLO</button>
}

export default WinChecker;