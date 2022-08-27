function NewGame(props) {
    return (
        <div className="newGame">
            <form>
                Enter player names:<br/>
                <PlayerList players={props.players} deleteHandle={props.deleteHandle} changeHandle={props.changeHandle} />
                <dir className="App-button" onClick={props.addHandle}>+</dir>
                <dir className="App-button" onClick={props.startHandle}>Start game</dir>
            </form>            
        </div>
    );
}

function PlayerList(props) {
    const list = props.players.map((player, i) => {
        return (
            <dir key={i} className="App-input-dir">
                <input className="App-input" type="text" key={i} id={i} value={player.name} onChange={props.changeHandle} />
                <dir className="App-button" id={i} onClick={props.deleteHandle}>-</dir>
            </dir>
        )
    });
    return list
}

export default NewGame;