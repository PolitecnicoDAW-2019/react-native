import React, { Component } from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { modifyPlayersData } from '../../styles';
import ImagePickerCustom from '../imagePicker';

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
		<ImagePickerCustom></ImagePickerCustom>
		<TextInput
			label="Nombre"
			value={name}
			style={modifyPlayersData.text}
			onChangeText={name => onChange({ name })}
		></TextInput>
		<TextInput
			label="Alias"
			value={alias}
			style={modifyPlayersData.text}
			onChangeText={alias => onChange({ alias })}
		></TextInput>
		<TextInput
			label="Posicion"
			value={position}
			style={modifyPlayersData.text}
			onChangeText={position => onChange({ position })}
		></TextInput>
		<TextInput
			label="Fecha Nacimiento"
			value={birthdate}
			style={modifyPlayersData.text}
			onChangeText={birthdate => onChange({ birthdate })}
		></TextInput>
		<TextInput
			label="Historial"
			value={history}
			style={modifyPlayersData.text}
			onChangeText={history => onChange({ history })}
		></TextInput>
		<TextInput
			label="Club"
			value={club}
			style={modifyPlayersData.text}
			onChangeText={club => onChange({ club })}
		></TextInput>
	</View>
);

export default ModifyPlayersData;
