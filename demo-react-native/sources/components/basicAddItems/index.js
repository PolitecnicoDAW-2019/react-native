import React from 'react';
import { StyleSheet, Modal, Text, TextInput, View } from 'react-native';

//TODO: CAMBIAR LOS ESTILOS POR DEFECTO Y LLEVAR A STYLES
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'flex-end',
		flexDirection: 'row'
	},
	content: {
		padding: 20,
		paddingBottom: 30,
		flex: 1,
		backgroundColor: '#ffffff',
		shadowOffset: { width: 0, height: -3 },
		shadowColor: 'black',
		shadowOpacity: 0.2,
		shadowRadius: 5,
		elevation: 30
		// width: 200
	},
	text: {
		borderBottomWidth: 1,
		padding: 5
	},
	closeIcon: {
		color: '#fff'
	},
	buttonRow: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		paddingBottom: 20
	},
	block: {
		margin: 10
	},
	textArea: {
		height: 80
	}
});

//TODO: ADAPTAR A DATOS DE UN PLAYER
const BasicAddItems = ({ name, alias, onChange }) => (
	<React.Fragment>
		<View style={styles.block}>
			<Text>Nombre</Text>
			<TextInput
				style={styles.text}
				value={name}
				onChangeText={name => onChange({ name })}
				clearButtonMode="always"
			/>
		</View>
		<View style={styles.block}>
			<Text>Alias</Text>
			<TextInput
				style={styles.text}
				value={alias}
				onChangeText={alias => onChange({ alias })}
				clearButtonMode="always"
			/>
		</View>
	</React.Fragment>
);

export default BasicAddItems;
