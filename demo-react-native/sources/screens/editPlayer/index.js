import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { editPlayer } from '../../styles';
import BasicAddItems from '../../components/modifyPlayersData';
import { editPlayerTitle } from '../../constants';

export default class EditPlayer extends Component {
	static navigationOptions = {
		title: editPlayerTitle
	};

	constructor(props) {
		super(props);

		this.state = {
			player: props.navigation.getParam('player')
		};
	}

	componentDidMount = async () => {
		this.props.navigation.setParams({
			updatedPlayer: this.state.player
		});
	};

	updateLocalPlayer = property => {
		const newPlayer = { ...this.state.player, ...property };
		this.setState({ player: newPlayer });
		this.props.navigation.setParams({
			updatedPlayer: newPlayer
		});
	};

	render() {
		const { player } = this.state;
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
							navigation.getParam('onSave')(
								navigation.getParam('updatedPlayer')
							);
							navigation.goBack();
						}}
					>
						Guardar
					</Button>
				</View>
			</View>
		);
	}
}
