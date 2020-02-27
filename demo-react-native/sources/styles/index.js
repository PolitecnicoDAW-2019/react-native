import { StyleSheet } from 'react-native';

const playersList = StyleSheet.create({
	container: {
		width: '100%',
		marginTop: 40
	},
	listItem: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 30
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
		elevation: 5
	},
	information: {
		width: '100%',
		fontSize: '12px'
	},
	title: {
		color: '#000',
		fontWeight: 'bold',
		fontSize: '18px'
	},
	paragraph: {
		color: '#a6a6a6',
		fontSize: '14px',
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
		backgroundColor: '#ffffff',
		margin: 0
	},
	containerPlayers: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		margin: 0
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
	appbar: {
		width: '100%',
		backgroundColor: '#16a0e2'
	},
	footer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		width: '100%',
		height: '40px',
		backgroundColor: '#16a0e2'
	},
	fab: {
		position: 'fixed',
		margin: 25,
		right: 0,
		bottom: 0,
		backgroundColor: '#16a0e2',
		elevation: 8
	}
});

export { playersList, main };
