import { StyleSheet } from 'react-native';

const playersList = StyleSheet.create({
	container: {
		width: '100%',
		paddingTop: 40,
		paddingBottom: 40
	},
	listItem: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		width: '100%'
		/* marginBottom: 30 */
	},
	icon: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: 20,
		height: 20
	},
	card: {
		width: '70%',
		marginBottom: 60,
		elevation: 6,
		backgroundColor: '#ffffff'
	},
	information: {
		width: '100%',
		fontSize: 12
	},
	paragraph: {
		color: '#a6a6a6',
		fontSize: 14,
		textTransform: 'capitalize',
		marginBottom: 15
	},
	containerButtons: {
		flex: 1,
		justifyContent: 'space-around',
		alignItems: 'center',
		backgroundColor: '#fafafa'
	}
});

const main = StyleSheet.create({
	containerMain: {
		backgroundColor: '#f9f9fa',
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
		flex: 1,
		justifyContent: 'center',
		width: '100%',
		height: '100%'
	},
	saveButton: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
		backgroundColor: '#4962f6',
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
		borderBottomLeftRadius: 0,
		borderBottomRightRadius: 0
	}
});

const addPlayer = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		width: '100%',
		height: '100%'
	},
	saveButton: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
		backgroundColor: '#4962f6',
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
		borderBottomLeftRadius: 0,
		borderBottomRightRadius: 0
	}
});

const searchPlayer = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'flex-end',
		flexDirection: 'row'
	},
	content: {
		flex: 1,
		width: '100%',
		padding: 20,
		paddingBottom: 30,
		backgroundColor: '#ffffff',
		elevation: 30
	},
	text: {
		flex: 5,
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		padding: 5
	},
	closeIcon: {
		color: '#fff'
	},
	buttonRow: {
		flexDirection: 'row',
		marginTop: 10
	},
	block: {
		margin: 10
	}
});

const modifyPlayersData = StyleSheet.create({
	text: {
		backgroundColor: '#ffffff',
		marginBottom: 25
	}
});

export {
	playersList,
	main,
	editPlayer,
	addPlayer,
	searchPlayer,
	modifyPlayersData
};
