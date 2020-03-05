import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import { FAB } from 'react-native-paper';
import PlayersList from '../../components/playersList';
import SearchPlayer from '../../components/searchPlayerModal';
import { main } from '../../styles';
import {
	getPlayers,
	addPlayer,
	deletePlayer,
	updatePlayer
} from '../../data/players.data';
import { DATANOTFOUND, ASKPLAYERDELETE } from '../../constants';

class MainScreen extends Component {
	constructor(props) {
		super(props);
		this.navigation = props.navigation;
		this.state = {
			players: [],
			modalVisible: false,
			closeSearchButton: false
		};
	}

	componentDidMount = async () => {
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
		Alert.alert(ASKPLAYERDELETE, player.text, [
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
			alert(DATANOTFOUND);
			this.setState({ players: getPlayers() });
		} else {
			this.setState({ players: newList, closeSearchButton: true });
		}
	};

	openEditPlayer = player => {
		this.navigation.navigate('EditPlayer', {
			player,
			handleUpdate: this.handleUpdate
		});
	};

	openAddPlayer = () => {
		this.navigation.navigate('AddPlayer', { onSave: this.handleAdd });
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
