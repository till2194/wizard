function NewGame(props) {
    return (
        <div className="newGame">
            <form>
                Enter player names:<br/>
                <PlayerList players={props.players} deleteHandle={props.deleteHandle} changeHandle={props.changeHandle} />
                <dir className="App-button" id="playerAdd" onClick={props.addHandle}>+</dir>
                <dir className="App-button" id="startGame" onClick={props.startHandle}>Start game</dir>
            </form>            
        </div>
    );
}

function PlayerList(props) {
    const list = props.players.map((player, i) => {
        return (
            <dir key={"playerForm"+i} id={"playerForm"+i} className="App-input-dir">
                <input className="App-input" type="text" id={"playerInput"+i} value={player.name} onChange={event => props.changeHandle(event, i)} />
                <dir className="App-button" id={"playerDelete"+i} onClick={event => props.deleteHandle(event, i)}>-</dir>
            </dir>
        )
    });
    return list
}

export default NewGame;