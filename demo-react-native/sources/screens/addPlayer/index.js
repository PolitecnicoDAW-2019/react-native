import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { addPlayer } from '../../styles';
import ModifyPlayersData from '../../components/modifyPlayersData';

export default class AddPlayer extends Component {
	constructor({ route, navigation }) {
		super({ route, navigation });
		const { handleAdd } = route.params;
		this.navigation = navigation;
		this.state = {
			player: [],
			handleAdd
		};
	}

	addLocalPlayer = property => {
		const newPlayer = { ...this.state.player, ...property };
		this.setState({ player: newPlayer });
	};

	render() {
		const { handleAdd } = this.state;
		return (
			<View style={addPlayer.container}>
				<ModifyPlayersData
					onChange={property => this.addLocalPlayer(property)}
				></ModifyPlayersData>
				<View style={addPlayer.bottomView}>
					<Button
						mode="contained"
						style={addPlayer.saveButton}
						onPress={() => {
							const newPlayer = this.state.player;
							handleAdd(newPlayer);
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
