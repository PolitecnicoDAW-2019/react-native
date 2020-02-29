import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import { FAB } from 'react-native-paper';
import PlayersList from '../../components/playersList/index';
import SearchPlayer from '../../components/searchPlayerModal/index';
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
			players: [],
			modalVisible: false,
			closeSearchButton: false
		};
	}

	componentDidMount = () => {
		const players = getPlayers();
		this.setState({ players: players });
	};

	handleAdd = player => {
		const newList = addPlayer(player);
		this.setState({ players: newList });
	};

	handleUpdate = player => {
		const newList = updatePlayer(player);
		this.setState({ players: newList });
	};

	handleDelete = player => {
		Alert.alert('¿Quieres eliminar al jugador?', player.text, [
			{ text: 'Cancelar', style: 'cancel' },
			{
				text: 'OK',
				onPress: () => {
					const newList = deletePlayer(player);
					this.setState({ players: newList, closeSearchButton: false });
				}
			}
		]);
	};

	handleHideModal = visible => {
		this.setState({ modalVisible: visible });
	};

	handleSearch = playerName => {
		const { players } = this.state;
		const newList = players.filter(
			({ name }) => name.toLowerCase() === playerName.toLowerCase()
		);
		if (newList.length < 1) {
			alert('No results found');
			this.setState({ players: getPlayers() });
		} else {
			this.setState({ players: newList, closeSearchButton: true });
		}
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

	clearSearch = () => {
		this.setState({ players: getPlayers(), closeSearchButton: false });
	};

	render() {
		const { players } = this.state;
		const { modalVisible } = this.state;
		const { closeSearchButton } = this.state;
		return (
			<View style={main.containerMain}>
				<PlayersList
					players={players}
					onUpdate={this.handleUpdate}
					onDelete={this.handleDelete}
					onEdit={this.openEditPlayer}
				></PlayersList>
				{closeSearchButton && (
					<FAB
						style={main.closeSearch}
						icon="window-close"
						onPress={this.clearSearch}
						small
					></FAB>
				)}
				<FAB
					style={main.fabSearch}
					icon="magnify"
					onPress={() => this.handleHideModal(true)}
				></FAB>
				<FAB style={main.fabAdd} icon="plus" onPress={this.openAddPlayer}></FAB>
				<SearchPlayer
					modalVisible={modalVisible}
					handleCloseModal={this.handleHideModal}
					handleSearch={this.handleSearch}
				></SearchPlayer>
			</View>
		);
	}
}

export default MainScreen;
