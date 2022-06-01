import './App.css';
import Header from './components/Header'
import Board from './components/Board'
import NewGameButton from './components/NewGameButton'
import WinChecker from './components/WinChecker'

function App() {
  return (
    <div className="App">
      <body>
      <Header/>
      <Board/>
      <br></br>
      <NewGameButton/>
      <br></br>
      <br></br>
      <WinChecker/>
      </body>
    </div>
  );
}

export default App;
