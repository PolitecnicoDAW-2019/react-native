import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { addPlayer } from '../../styles';
import BasicAddItems from '../../components/modifyPlayersData';
import { addPlayerTitle } from '../../constants';

export default class AddPlayer extends Component {
	static navigationOptions = {
		title: addPlayerTitle
	};

	constructor(props) {
		super(props);

		this.state = '';
	}

	componentDidMount = async () => {
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
	};

	render() {
		return (
			<View style={addPlayer.container}>
				<BasicAddItems
					onChange={property => this.updateLocalPlayer(property)}
				></BasicAddItems>
				<View style={addPlayer.bottomView}>
					<Button
						mode="contained"
						style={addPlayer.saveButton}
						onPress={() => {
							navigation.getParam('onSave')(navigation.getParam('addPlayer'));
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
