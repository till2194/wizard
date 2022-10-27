function Game(props) {
    const nr = props.state.round-1;
    return (
        <div className="game">
            <div className="round-counter">
                Runde: {props.state.round}/{props.state.roundsMax}<br/>
                Stiche: {props.state.rounds.tricksSaid[nr]}/{props.state.rounds.tricksMax[nr]}
            </div>
            <Table nr={nr} players={props.state.players}/>
        </div>
    )
}

function TableHeaderRow() {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Stiche</th>
                <th>Punkte</th>
                <th>Korrekt</th>
            </tr>
        </thead>
    );
}

function TableRow({ nr, players }) {
    return players.map((player, i) =>
        <tbody>
            <tr key={"playerRow" + i} id={"playerRow" + i}>
                <td>{player.name}</td>
                <td>{player.tricksGot[nr]} / {player.tricksSaid[nr]}</td>
                <td>{player.pointsTotal[nr]} ({player.pointsNew[nr] >= 0 ? "+" : "-"}{player.pointsNew[nr]})</td>
                <td>{player.correctTotal[nr]}</td>
            </tr>
        </tbody>
    );
}

function Table({nr, players }) {
    return (
        <table>
            <TableHeaderRow />
            <TableRow nr={nr} players={players} />
        </table>
    );
}

export default Game;