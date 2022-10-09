import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const API_ENDPOINT = "API_ENDPOINT";
  const [players, setPlayers] = useState([]);
  const getTop10 = () => {
    fetch(`${API_ENDPOINT}/players/top10`)
      .then((response) => response.json())
      .then((data) => {
        setPlayers(data);
      });
  };

  useEffect(() => {
    getTop10();
  }, []);

  return (
    <div className="app">
      <div className="title">
        <p>Leaderboard</p>
      </div>

      <div id="container">
        {players.map((player, index) => (
          <div key={index} className="row">
            <p className="element">{++index}</p>
            <p className="element">{player.navn}</p>
            <p className="element">{player.score}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
