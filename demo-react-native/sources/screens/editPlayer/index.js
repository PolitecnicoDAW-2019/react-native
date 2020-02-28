import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { Icon } from 'react-native-elements';
import { editPlayer } from '../../styles';
import BasicAddItems from '../../components/basicAddItems';

//? QUE COJA BIEN LOS DATOS Y ACTUALICE BIEN
// nose si es por que en web no lo hace

export default class EditPlayer extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: 'Editar o Añadir Jugador',
		headerRight: (
			<Icon
				style={editPlayer.icon}
				onPress={() => {
					navigation.getParam('onSave')(navigation.getParam('updatedPlayer'));
					navigation.goBack();
				}}
				name="save"
				type="font-awesome"
				color="#ffffff"
				size={20}
			></Icon>
		)
	});

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
		const { name, alias } = player;
		return (
			<View>
				<BasicAddItems
					name={name}
					alias={alias}
					onChange={property => this.updateLocalPlayer(property)}
				></BasicAddItems>
			</View>
		);
	}
}
