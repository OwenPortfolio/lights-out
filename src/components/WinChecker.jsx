const WinChecker = () => {

    let grid = ['A1', 'A2', 'A3', 'A4', 'A5',
                'B1', 'B2', 'B3', 'B4', 'B5',
                'C1', 'C2', 'C3', 'C4', 'C5',
                'D1', 'D2', 'D3', 'D4', 'D5',
                'E1', 'E2', 'E3', 'E4', 'E5']

    const checkWins = () => {
        let lights = 0;
        
        for(let i = 0; i < grid.length; i++){
            let tile = document.getElementById(grid[i]).firstChild
            if(tile.style[0] !== 'background-color'){
                lights++;
            }
            if(lights === 25){
                document.getElementById('NewGameButton').click();
                alert('You Win!')
            }
        }
    }



 return <div id="WinChecker" onClick={checkWins}></div>
}

export default WinChecker;