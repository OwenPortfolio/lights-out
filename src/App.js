import './App.css';
import Header from './components/Header'
import Board from './components/Board'
import NewGameButton from './components/NewGameButton'

function App() {
  return (
    <div className="App">
      <body>
      <Header/>
      <Board/>
      <br></br>
      <NewGameButton/>
      </body>
    </div>
  );
}

export default App;
