import React, { Component } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Appbar } from 'react-native-paper';
import { Icon } from 'react-native-elements';
import PlayersList from '../../components/playersList/index';
import {
	getPlayers,
	addPlayer,
	deletePlayer,
	updatePlayer
} from '../../data/players';

const styles = StyleSheet.create({
	containerMain: {
		backgroundColor: '#ffffff',
		margin: 0
	},
	containerPlayers: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		margin: 0
	},
	addRow: {
		flexDirection: 'row',
		width: '80%'
	},
	title: {
		fontWeight: 'bold',
		fontSize: 20
	},
	text: {
		width: '80%',
		borderBottomWidth: 1,
		padding: 5
	},
	loading: {
		flex: 1
	},
	appbar: {
		width: '100%',
		backgroundColor: '#16a0e2'
	},
	footer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		width: '100%',
		height: '40px',
		backgroundColor: '#16a0e2'
	}
});

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
			<View style={styles.containerMain}>
				<Appbar.Header style={styles.appbar}>
					<Appbar.Content
						title='React Native'
						subtitle='demo daw'
					></Appbar.Content>
					<Appbar.Action
						icon='magnify'
						onPress={this.handleSearch}
					></Appbar.Action>
				</Appbar.Header>

				<View style={styles.containerPlayers}>
					<PlayersList
						players={players}
						onDelete={this.handleDelete}
					></PlayersList>
				</View>

				<Appbar style={styles.footer}>
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
