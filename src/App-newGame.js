function NewGame(props) {
    return (
        <div className="newGame">
            <form>
                Enter player names:<br/>
                <PlayerList players = {props.players} />
            </form>            
        </div>
    );
}

function PlayerList(props) {
    const list = props.players.map((player, i) =>
        <input className="App-input" type="text" key={i} name={"name" + i} defaultValue={player.name} />
    );
    return list
}

export default NewGame;