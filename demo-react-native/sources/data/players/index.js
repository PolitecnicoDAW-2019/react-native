import Player from '../../models/player.model';

const getPlayers = () => {
	return [
		new Player({
			name: 'Cristiano Ronaldo',
			alias: 'CR7',
			position: 'delantero',
			image: require('../../../assets/images/cristiano.jpg'),
			birthday: '1999-12-12',
			history: 'Real Madrid, Juventus',
			club: 'Juventus'
		}),
		new Player({
			name: 'Iker Casillas',
			alias: 'CASILLAS',
			position: 'delantero',
			image: require('../../../assets/images/casillas.jpg'),
			birthday: '1999-12-12',
			history: 'testTeam',
			club: 'testTeam'
		}),
		new Player({
			name: 'Gerard Pique',
			alias: 'PIQUE',
			position: 'delantero',
			image: require('../../../assets/images/pike.jpeg'),
			birthday: '1999-12-12',
			history: 'testTeam',
			club: 'testTeam'
		})
	];
};

const updatePlayer = (list, selectedPlayer) => {
	const updateIndex = list.findIndex(
		player => player.item.id === selectedPlayer.item.id
	);
	const newPlayersList = [...list];
	newPlayersList[updateIndex] = Player;
	return newPlayersList;
};

const addPlayer = (list, selectedPlayer) => [
	...(list || []),
	newPlayer(selectedPlayer)
];

const deletePlayer = (list, selectedPlayer) =>
	list.filter(player => player.id != selectedPlayer.item.id);

export { getPlayers, addPlayer, updatePlayer, deletePlayer };
