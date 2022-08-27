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
        name: "Player0",
        points: 0
      },{
        name: "Player1",
        points: 0
      }]
    };
  }

  render() {
    let main;
    switch (this.state.state) {
      case "newGame":
        main = <NewGame players={this.state.players}
          addHandle={this.handleAddPlayer}
          deleteHandle={this.handleDeletePlayer}
          changeHandle={this.handleChangePlayer}
          startHandle={this.handleStartGame}
        />
        break;
      case "game":
        main = <Game />
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
  }

  selectInput() {
    const input = document.getElementById("playerInput"+(this.state.players.length-1));
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
      players: prevState.players.concat({
        name: "Player" + (prevState.players.length),
        points: 0
      })
    }))
  }

  handleDeletePlayer(event, playerId) {
    this.setState(prevState => {
      console.log("deleting player " + prevState.players[playerId].name + " ...")
      const newPlayers = [...prevState.players.slice(0, playerId), ...prevState.players.slice(playerId+1)];
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
    this.setState({
      state: "game"
    })
  }
  
}

export default App;
