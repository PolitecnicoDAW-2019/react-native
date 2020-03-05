import Player from '../models/player.model';

let players = [
	new Player({
		name: 'Cristiano Ronaldo',
		alias: 'CR7',
		position: 'delantero',
		image: require('../../assets/images/cristiano.jpg'),
		birthdate: '1999-12-12',
		history: 'Real Madrid, Juventus',
		club: 'Juventus'
	}),
	new Player({
		name: 'Iker Casillas',
		alias: 'CASILLAS',
		position: 'delantero',
		image: require('../../assets/images/casillas.jpg'),
		birthdate: '1999-12-12',
		history: 'testTeam',
		club: 'testTeam'
	}),
	new Player({
		name: 'Gerard Pique',
		alias: 'PIQUE',
		position: 'delantero',
		image: require('../../assets/images/pike.jpeg'),
		birthdate: '1999-12-12',
		history: 'testTeam',
		club: 'testTeam'
	}),
	new Player({
		name: 'Eden Hazard',
		alias: 'HAZARD',
		position: 'delantero',
		image: require('../../assets/images/hazard.jpg'),
		birthdate: '1999-12-12',
		history: 'testTeam',
		club: 'testTeam'
	})
];

const getPlayers = () => players;

const updatePlayer = selectedPlayer => {
	const updateIndex = players.findIndex(
		player => player.id === selectedPlayer.id
	);
	players = [...players];
	players[updateIndex] = selectedPlayer;
	return players;
};

const addPlayer = selectedPlayer => {
	players = [...(players || []), newPlayer(selectedPlayer)];
	return players;
};

const deletePlayer = selectedPlayer => {
	players = players.filter(player => player.id != selectedPlayer.item.id);
	return players;
};

export { getPlayers, addPlayer, updatePlayer, deletePlayer };
