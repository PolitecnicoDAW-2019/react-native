import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import { editPlayer } from '../../styles';
import ModifyPlayersData from '../../components/modifyPlayersData';
import { SAVE, COLOR_PRIMARY_LIGHT } from '../../constants';

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
			<ScrollView style={editPlayer.container}>
				<Button
					mode="contained"
					color={COLOR_PRIMARY_LIGHT}
					contentStyle={{ height: 60 }}
					children={SAVE}
					style={editPlayer.saveButton}
					onPress={() => {
						const newPlayer = this.state.player;
						handleUpdate(newPlayer);
						this.navigation.goBack();
					}}
				></Button>
				<ModifyPlayersData
					name={name}
					alias={alias}
					position={position}
					birthdate={birthdate}
					history={history}
					club={club}
					onChange={property => this.updateLocalPlayer(property)}
					onChangeImage={image => this.updateLocalPlayer({ image: image })}
				></ModifyPlayersData>
			</ScrollView>
		);
	}
}
