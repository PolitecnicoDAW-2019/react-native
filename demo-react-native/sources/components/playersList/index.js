import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import { Icon } from 'react-native-elements';
import { breakLine } from '../../constants';

const styles = StyleSheet.create({
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
		width: '60%'
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

const PlayersList = ({ players, onDelete }) => {
	const renderPlayer = player => {
		return (
			<View style={styles.listItem}>
				<Card style={styles.card}>
					<Card.Cover source={player.item.image}></Card.Cover>
					<Card.Content>
						<Title style={styles.title}>{player.item.name}</Title>
						<Paragraph style={styles.paragraph}>
							{player.item.alias}
							{breakLine}
							{player.item.position}
							{breakLine}
							{player.item.club}
						</Paragraph>
					</Card.Content>
					<Card.Actions style={styles.containerButtons}>
						<Button style={styles.icon}>
							<Icon
								name='pencil'
								type='font-awesome'
								color='#16a0e2'
								size={18}
							></Icon>
						</Button>
						<Button style={styles.icon} onPress={() => onDelete(player)}>
							<Icon
								name='trash'
								type='font-awesome'
								color='#16a0e2'
								size={18}
							></Icon>
						</Button>
					</Card.Actions>
				</Card>
			</View>
		);
	};

	return (
		<FlatList
			data={players}
			renderItem={player => renderPlayer(player)}
			keyExtractor={player => player.id}
			style={styles.container}
			contentContainerStyle={{ justifyContent: 'center' }}
		></FlatList>
	);
};

export default PlayersList;
