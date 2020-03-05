import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { addPlayer } from '../../styles';
import BasicAddItems from '../../components/modifyPlayersData';

export default class AddPlayer extends Component {
	constructor(props) {
		super(props);
		this.state = '';
	}

	/* componentDidMount = async () => {
		this.props.navigation.setParams({
			addPlayer: this.state.player
		});
	};

	addLocalPlayer = property => {
		const newPlayer = { ...this.state.player, ...property };
		this.setState({ player: newPlayer });
		this.props.navigation.setParams({
			addPlayer: newPlayer
		});
	}; */

	render() {
		return (
			<View style={addPlayer.container}>
				<BasicAddItems
					onChange={property => this.addLocalPlayer(property)}
				></BasicAddItems>
				<View style={addPlayer.bottomView}>
					<Button
						mode="contained"
						style={addPlayer.saveButton}
						onPress={() => {}}
					>
						Guardar
					</Button>
				</View>
			</View>
		);
	}
}
