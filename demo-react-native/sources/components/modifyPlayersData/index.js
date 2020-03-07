import React, { Component } from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';

const ModifyPlayersData = ({
	name,
	alias,
	position,
	birthdate,
	history,
	club,
	onChange
}) => (
	<View>
		<TextInput
			label="Nombre"
			value={name}
			onChangeText={name => onChange({ name })}
		></TextInput>
		<TextInput
			label="Alias"
			value={alias}
			onChangeText={alias => onChange({ alias })}
		></TextInput>
		<TextInput
			label="Posicion"
			value={position}
			onChangeText={position => onChange({ position })}
		></TextInput>
		<TextInput
			label="Fecha Nacimiento"
			value={birthdate}
			onChangeText={birthdate => onChange({ birthdate })}
		></TextInput>
		<TextInput
			label="Historial"
			value={history}
			onChangeText={history => onChange({ history })}
		></TextInput>
		<TextInput
			label="Club"
			value={club}
			onChangeText={club => onChange({ club })}
		></TextInput>
	</View>
);

export default ModifyPlayersData;
