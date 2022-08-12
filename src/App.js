import './App.css';
import NewGame from './App-newGame'
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerCount: 2,
      players: [{
        name: "Player1",
        points: 0
      },{
        name: "Player2",
        points: 0
      }]
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Wizard Counting App</h1>
        </header>
        <main className="App-body">
          <NewGame players={this.state.players}/>
        </main>
      </div>
    );
  }

  // handleButtonStart(event) {
  //   for (let i in this.state.playerCount) {
  //     this.addPlayer()
  //   }
  // }

  addPlayer(name) {
    return {
      name: name,
      points: 0 
    };
  }
  
}

export default App;
