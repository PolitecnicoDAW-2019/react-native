import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';
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
			<TextInput
				value={name}
				style={modifyPlayers.text}
				onChangeText={name => onChange({ name })}
				clearButtonMode="always"
			></TextInput>
		</View>
		<View style={modifyPlayers.block}>
			<Text>Alias</Text>
			<TextInput
				value={alias}
				style={modifyPlayers.text}
				onChangeText={alias => onChange({ alias })}
				clearButtonMode="always"
			></TextInput>
		</View>
		<View style={modifyPlayers.block}>
			<Text>Posicion</Text>
			<TextInput
				value={position}
				style={modifyPlayers.text}
				onChangeText={position => onChange({ position })}
				clearButtonMode="always"
			></TextInput>
		</View>
		<View style={modifyPlayers.block}>
			<Text>Fecha Nacimiento</Text>
			<TextInput
				value={birthdate}
				style={modifyPlayers.text}
				onChangeText={birthdate => onChange({ birthdate })}
				clearButtonMode="always"
			></TextInput>
		</View>
		<View style={modifyPlayers.block}>
			<Text>Historial</Text>
			<TextInput
				value={history}
				style={modifyPlayers.text}
				onChangeText={history => onChange({ history })}
				clearButtonMode="always"
			></TextInput>
		</View>
		<View style={modifyPlayers.block}>
			<Text>Club</Text>
			<TextInput
				value={club}
				style={modifyPlayers.text}
				onChangeText={club => onChange({ club })}
				clearButtonMode="always"
			></TextInput>
		</View>
	</View>
);

export default ModifyPlayersData;
