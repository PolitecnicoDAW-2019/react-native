import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { addPlayer } from '../../styles';
import ModifyPlayersData from '../../components/modifyPlayersData';
import { COLOR_PRIMARY_LIGHT, SAVE } from '../../constants';

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
				<Button
					mode="contained"
					color={COLOR_PRIMARY_LIGHT}
					contentStyle={{ height: 60 }}
					children={SAVE}
					style={addPlayer.saveButton}
					onPress={() => {
						const newPlayer = this.state.player;
						handleAdd(newPlayer);
						this.navigation.goBack();
					}}
				></Button>
				<ModifyPlayersData
					onChange={property => this.addLocalPlayer(property)}
				></ModifyPlayersData>
			</View>
		);
	}
}
