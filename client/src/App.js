import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Cornhole Counter</h1>
      <h5>"Can't stop here, this is cornhole country"</h5>
      <div className="game-container">
        <div className="game-board board-shadow">
          <div className="board-info">
            <h2 className="player">Player 1</h2>
            <h2 className="score">Score: 0</h2>
          </div>
        </div>
        <div className="game-board board-shadow">
          <div className="board-info">
            <h2 className="player">Player 2</h2>
            <h2 className="score">Score: 0</h2>
          </div>
        </div>
        {/* <img
          src="./imgs/wood-grain.jpg"
          alt="board grain"
          className="game-board"
        />
        <img
          src="./imgs/wood-grain.jpg"
          alt="board grain"
          className="game-board"
        /> */}
      </div>
    </div>
  );
}

export default App;
