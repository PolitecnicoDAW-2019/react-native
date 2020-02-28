import { StyleSheet } from 'react-native';

const playersList = StyleSheet.create({
	container: {
		width: '100%',
		marginTop: 40
	},
	listItem: {
		width: '100%',
		flexDirection: 'row',
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
		elevation: 6
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
	fabAdd: {
		position: 'absolute',
		margin: 25,
		right: 0,
		bottom: 0,
		backgroundColor: '#4962f6',
		elevation: 8
	},
	fabSearch: {
		position: 'absolute',
		margin: 25,
		right: 0,
		bottom: 80,
		backgroundColor: '#4962f6',
		elevation: 8
	}
});

const editPlayer = StyleSheet.create({
	icon: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: 20,
		height: 20
	}
});

export { playersList, main, editPlayer };
