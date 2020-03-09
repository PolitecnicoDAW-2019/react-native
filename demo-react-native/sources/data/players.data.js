import Player from '../models/player.model';

let players = [
	new Player({
		name: 'Cristiano Ronaldo',
		alias: 'CR7',
		position: 'delantero',
		image:
			'https://ep01.epimg.net/deportes/imagenes/2018/06/15/actualidad/1529066910_542434_1529067125_noticia_normal.jpg',
		birthdate: '1999-12-12',
		history: 'Real Madrid, Juventus',
		club: 'Juventus'
	}),
	new Player({
		name: 'Iker Casillas',
		alias: 'CASILLAS',
		position: 'delantero',
		image:
			'https://okdiario.com/img/2020/03/04/casillas-investigado-ok-655x368.jpg',
		birthdate: '1999-12-12',
		history: 'testTeam',
		club: 'testTeam'
	}),
	new Player({
		name: 'Lionel Messi',
		alias: 'MESSI',
		position: 'delantero',
		image:
			'https://static.t13.cl/images/sizes/1200x675/1555517174-0001fp56a.jpg',
		birthdate: '1999-12-12',
		history: 'testTeam',
		club: 'testTeam'
	}),
	new Player({
		name: 'Eden Hazard',
		alias: 'HAZARD',
		position: 'delantero',
		image:
			'https://tmssl.akamaized.net/images/foto/big/eden-hazard-real-madrid-1568368938-25709.jpg',
		birthdate: '1999-12-12',
		history: 'testTeam',
		club: 'testTeam'
	}),
	new Player({
		name: 'Gerard Pique',
		alias: 'PIQUE',
		position: 'delantero',
		image:
			'https://ep01.epimg.net/deportes/imagenes/2017/07/23/actualidad/1500832133_490125_1500852796_noticia_normal.jpg',
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
	players = [...(players || []), new Player(selectedPlayer)];
	return players;
};

const deletePlayer = selectedPlayer => {
	players = players.filter(player => player.id != selectedPlayer.item.id);
	return players;
};

export { getPlayers, addPlayer, updatePlayer, deletePlayer };
