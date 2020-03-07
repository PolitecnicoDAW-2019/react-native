import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { editPlayer } from '../../styles';
import ModifyPlayersData from '../../components/modifyPlayersData';

export default class EditPlayer extends Component {
	constructor({ route, navigation }) {
		super({ route, navigation });
		const { player, handleUpdate } = route.params;
		this.navigation = navigation;
		this.state = {
			player: player.item,
			handleUpdate: handleUpdate
		};
	}

	updateLocalPlayer = property => {
		const newPlayer = { ...this.state.player, ...property };
		this.setState({ player: newPlayer });
	};

	render() {
		const { player, handleUpdate } = this.state;
		const { name, alias, position, birthdate, history, club } = player;
		return (
			<View style={editPlayer.container}>
				<ModifyPlayersData
					name={name}
					alias={alias}
					position={position}
					birthdate={birthdate}
					history={history}
					club={club}
					onChange={property => this.updateLocalPlayer(property)}
				></ModifyPlayersData>
				<Button
					mode="text"
					color="#ffffff"
					style={editPlayer.saveButton}
					onPress={() => {
						const newPlayer = this.state.player;
						handleUpdate(newPlayer);
						this.navigation.goBack();
					}}
				>
					Guardar
				</Button>
			</View>
		);
	}
}
