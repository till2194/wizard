import './App.css';
import NewGame from './App-newGame'
import React from 'react';
import Game from './App-game';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
    this.selectInput = this.selectInput.bind(this);
    this.handleAddPlayer = this.handleAddPlayer.bind(this);
    this.handleDeletePlayer = this.handleDeletePlayer.bind(this);
    this.handleChangePlayer = this.handleChangePlayer.bind(this);
    this.handleStartGame = this.handleStartGame.bind(this);
    this.state = {
      state: "newGame",
      addedPlayer: false,
      players: [{
        name: "Player0"
      },
      {
        name: "Player1"
      }]
    };
  }

  render() {
    let main;
    switch (this.state.state) {
      case "newGame":
        main = <NewGame
          players={this.state.players}
          addHandle={this.handleAddPlayer}
          deleteHandle={this.handleDeletePlayer}
          changeHandle={this.handleChangePlayer}
          startHandle={this.handleStartGame}
        />
        break;
      case "game":
        main = <Game
          state={this.state}
        />
        break;
      default:
        main = <dir>Default main (should not happen)</dir>
    }
    return (
      <div className="App">
        <header className="App-header">
          <h1>Wizard Counting App</h1>
        </header>
        <main className="App-body">
          {main}
        </main>
      </div>
    );
  }

  componentDidUpdate() {
    if (this.state.addedPlayer) {
      this.selectInput();
    }
    console.log(this.state)
  }

  selectInput() {
    const input = document.getElementById("playerInput" + (this.state.players.length - 1));
    input.focus();
    input.select();
    this.setState({
      addedPlayer: false
    })
  }

  handleAddPlayer(event) {
    console.log("adding new player...")
    this.setState(prevState => ({
      addedPlayer: true,
      players: prevState.players.concat({name: "Player" + (prevState.players.length)})
    }))
  }

  handleDeletePlayer(event, playerId) {
    this.setState(prevState => {
      console.log("deleting player " + prevState.players[playerId].name + " ...")
      const newPlayers = [...prevState.players.slice(0, playerId), ...prevState.players.slice(playerId + 1)];
      return {
        players: newPlayers
      }
    })
  }

  handleChangePlayer(event, playerId) {
    this.setState(prevState => {
      let newPlayers = [...prevState.players];
      newPlayers[playerId].name = event.target.value;
      return {
        players: newPlayers
      }
    })
  }

  handleStartGame(event) {
    console.log("starting game...")
    this.setState(prevState => {
      const roundsMax = this.getRoundsMax(prevState.players.length);
      return {
        state: "game",
        round: 1,
        roundsMax: roundsMax,
        rounds: {
          tricksMax: Array.from({length: roundsMax}, (_, i) => i + 1),
          tricksSaid: new Array(roundsMax).fill(0),
          tricksDiff: new Array(roundsMax).fill(0)
        },
        players: prevState.players.map(player => {
          player.tricksSaid = new Array(roundsMax).fill(0);
          player.tricksGot = new Array(roundsMax).fill(0);
          player.pointsNew = new Array(roundsMax).fill(0);
          player.pointsTotal = new Array(roundsMax).fill(0);
          player.correct = new Array(roundsMax).fill(0);
          player.correctTotal = new Array(roundsMax).fill(0);
          return player
        })
      }
    })
  }

  getRoundsMax(num) {
    if (num <= 3) {
      return 20
    } else if (num <= 4) {
      return 15
    } else if (num <= 5) {
      return 12
    } else {
      return 10
    }
  }

  handleSetTrick(event, player, round) {

  }

}

export default App;
