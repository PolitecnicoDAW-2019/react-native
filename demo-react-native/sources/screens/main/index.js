import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import { Appbar } from 'react-native-paper';
import PlayersList from '../../components/playersList/index';
import { main } from '../../styles';
import {
	getPlayers,
	addPlayer,
	deletePlayer,
	updatePlayer
} from '../../data/players';

class MainScreen extends Component {
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

	handleSearch = () => {
		console.log('Buscando');
	};

	render() {
		const { players } = this.state;
		return (
			<View style={main.containerMain}>
				<Appbar.Header style={main.appbar}>
					<Appbar.Content
						title='React Native'
						subtitle='demo daw'
					></Appbar.Content>
					<Appbar.Action
						icon='magnify'
						onPress={this.handleSearch}
					></Appbar.Action>
				</Appbar.Header>

				<View style={main.containerPlayers}>
					<PlayersList
						players={players}
						onDelete={this.handleDelete}
					></PlayersList>
				</View>

				<Appbar style={main.footer}>
					<Appbar.Action
						icon='twitter'
						onPress={() => console.log('Pressed archive')}
					></Appbar.Action>
					<Appbar.Action
						icon='email'
						onPress={() => console.log('Pressed archive')}
					></Appbar.Action>
				</Appbar>
			</View>
		);
	}
}

export default MainScreen;
