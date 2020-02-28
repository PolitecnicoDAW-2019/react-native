import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import { FAB } from 'react-native-paper';
import PlayersList from '../../components/playersList/index';
import { main } from '../../styles';
import {
	getPlayers,
	addPlayer,
	deletePlayer,
	updatePlayer
} from '../../data/players';

class MainScreen extends Component {
	static navigationOptions = {
		title: 'Football Native'
	};

	constructor(props) {
		super(props);

		this.state = {
			players: []
		};
	}

	componentDidMount = () => {
		const players = getPlayers();
		this.setState({ players: players });
	};

	handleAdd = () => {
		const { players } = this.state;
		const newList = addPlayer(players);
		this.setState({ players: newList });
	};

	handleUpdate = player => {
		const { players } = this.state;
		const newList = updatePlayer(players, player);
		this.setState({ players: newList });
	};

	handleDelete = player => {
		Alert.alert('¿Quieres eliminar al jugador?', player.text, [
			{ text: 'Cancelar', style: 'cancel' },
			{
				text: 'OK',
				onPress: () => {
					const { players } = this.state;
					const newList = deletePlayer(players, player);
					this.setState({ players: newList });
				}
			}
		]);
	};

	/* TODO: */
	handleSearch = () => {
		console.log('Buscando');
	};

	openEditPlayer = player => {
		this.props.navigation.navigate('Edit', {
			player,
			onSave: this.handleUpdate
		});
	};

	openAddPlayer = () => {
		this.props.navigation.navigate('Edit', {
			onSave: this.handleAdd
		});
	};

	render() {
		const { players } = this.state;
		return (
			<View style={main.containerMain}>
				<PlayersList
					players={players}
					onUpdate={this.handleUpdate}
					onDelete={this.handleDelete}
					onEdit={this.openEditPlayer}
				></PlayersList>

				<FAB
					style={main.fabSearch}
					icon="magnify"
					onPress={this.handleSearch}
				></FAB>
				<FAB style={main.fabAdd} icon="plus" onPress={this.openAddPlayer}></FAB>
			</View>
		);
	}
}

export default MainScreen;
