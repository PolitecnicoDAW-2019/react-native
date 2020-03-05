import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { editPlayer } from '../../styles';
import BasicAddItems from '../../components/modifyPlayersData';

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

	componentDidMount = async () => {
		this.props.route.params.player.item({
			updatedPlayer: this.state.player
		});
	};

	updateLocalPlayer = property => {
		const newPlayer = { ...this.state.player, ...property };
		this.setState({ player: newPlayer });
	};

	render() {
		const { player, handleUpdate } = this.state;
		const { name, alias, position, birthdate, history, club } = player;
		return (
			<View style={editPlayer.container}>
				<BasicAddItems
					name={name}
					alias={alias}
					position={position}
					birthdate={birthdate}
					history={history}
					club={club}
					onChange={property => this.updateLocalPlayer(property)}
				></BasicAddItems>
				<View style={editPlayer.bottomView}>
					<Button
						mode="contained"
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
			</View>
		);
	}
}
