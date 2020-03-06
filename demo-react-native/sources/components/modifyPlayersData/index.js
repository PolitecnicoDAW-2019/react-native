import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { modifyPlayers } from '../../styles';

const ModifyPlayersData = ({
	name,
	alias,
	position,
	birthdate,
	history,
	club,
	onChange
}) => (
	<View style={modifyPlayers.container}>
		<View style={modifyPlayers.block}>
			<Text>Nombre</Text>
			{/* TODO: change to constants */}
			<TextInput
				label="Nombre"
				value={name}
				style={modifyPlayers.text}
				onChangeText={name => onChange({ name })}
			></TextInput>
		</View>
		<View style={modifyPlayers.block}>
			<Text>Alias</Text>
			<TextInput
				label="Alias"
				value={alias}
				style={modifyPlayers.text}
				onChangeText={alias => onChange({ alias })}
			></TextInput>
		</View>
		<View style={modifyPlayers.block}>
			<Text>Posicion</Text>
			<TextInput
				label="Posicion"
				value={position}
				style={modifyPlayers.text}
				onChangeText={position => onChange({ position })}
			></TextInput>
		</View>
		<View style={modifyPlayers.block}>
			<Text>Fecha Nacimiento</Text>
			<TextInput
				label="Fecha Nacimiento"
				value={birthdate}
				style={modifyPlayers.text}
				onChangeText={birthdate => onChange({ birthdate })}
			></TextInput>
		</View>
		<View style={modifyPlayers.block}>
			<Text>Historial</Text>
			<TextInput
				label="Historial"
				value={history}
				style={modifyPlayers.text}
				onChangeText={history => onChange({ history })}
			></TextInput>
		</View>
		<View style={modifyPlayers.block}>
			<Text>Club</Text>
			<TextInput
				label="Club"
				value={club}
				style={modifyPlayers.text}
				onChangeText={club => onChange({ club })}
			></TextInput>
		</View>
	</View>
);

export default ModifyPlayersData;
