import { StyleSheet } from 'react-native';

const playersList = StyleSheet.create({
	container: {
		width: '100%',
		paddingTop: 40
	},
	listItem: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		width: '100%'
	},
	title: {
		marginTop: 15,
		marginBottom: 10
	},
	icon: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: 40,
		height: 40
	},
	card: {
		width: '70%',
		marginBottom: 35,
		elevation: 3,
		backgroundColor: '#ffffff'
	},
	information: {
		width: '100%',
		fontSize: 14
	},
	paragraph: {
		color: '#a6a6a6',
		fontSize: 14,
		textTransform: 'capitalize',
		marginBottom: 15
	},
	containerButtons: {
		flex: 1,
		height: 70,
		justifyContent: 'flex-end',
		alignItems: 'center',
		backgroundColor: '#fafafa'
	}
});

const main = StyleSheet.create({
	containerMain: {
		backgroundColor: '#f9f9f9',
		margin: 0,
		height: '100%'
	},
	addRow: {
		flexDirection: 'row',
		width: '80%'
	},
	title: {
		fontWeight: 'bold',
		fontSize: 20
	},
	text: {
		width: '80%',
		borderBottomWidth: 1,
		padding: 5
	},
	loading: {
		flex: 1
	},
	fabAdd: {
		position: 'absolute',
		right: 30,
		bottom: 20,
		backgroundColor: '#4962f6',
		elevation: 8
	},
	fabSearch: {
		position: 'absolute',
		right: 30,
		bottom: 90,
		backgroundColor: '#4962f6',
		elevation: 8
	},
	closeSearch: {
		position: 'absolute',
		margin: 30,
		right: 0,
		top: 0,
		backgroundColor: '#000000',
		opacity: 0.5,
		elevation: 6,
		color: '#ffffff'
	}
});

const editPlayer = StyleSheet.create({
	container: {
		width: '100%'
	},
	saveButton: {
		width: '100%',
		borderRadius: 0,
		marginBottom: 60
	}
});

const addPlayer = StyleSheet.create({
	container: {
		width: '100%'
	},
	saveButton: {
		width: '100%',
		borderRadius: 0,
		marginBottom: 60
	}
});

const searchPlayer = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'flex-end'
	},
	content: {
		width: '100%',
		padding: 30,
		backgroundColor: '#ffffff',
		elevation: 15
	},
	text: {
		width: '100%',
		height: 55,
		borderTopWidth: 0.5,
		borderLeftWidth: 0.5,
		borderRightWidth: 0.5,
		borderColor: '#a6a6a6',
		backgroundColor: '#ffffff'
	},
	button: {
		color: '#ffffff',
		elevation: 0
	}
});

const modifyPlayersData = StyleSheet.create({
	container: {
		backgroundColor: '#f9f9f9'
	},
	text: {
		backgroundColor: '#ffffff',
		marginBottom: 25
	}
});

const imagePicker = StyleSheet.create({
	container: {
		width: '100%',
		backgroundColor: '#fafafa'
	},
	button: {
		marginTop: 50,
		borderRadius: 0
	},
	image: {
		width: '100%',
		height: 250
	}
});

export {
	playersList,
	main,
	editPlayer,
	addPlayer,
	searchPlayer,
	modifyPlayersData,
	imagePicker
};
