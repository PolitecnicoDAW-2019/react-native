import React from 'react';
import { FlatList, View } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import { Icon } from 'react-native-elements';
import { breakLine } from '../../constants';
import { playersList } from '../../styles';

const PlayersList = ({ players, onDelete }) => {
	const renderPlayer = player => {
		return (
			<View style={playersList.listItem}>
				<Card style={playersList.card}>
					<Card.Cover source={player.item.image}></Card.Cover>
					<Card.Content>
						<Title style={playersList.title}>{player.item.name}</Title>
						<Paragraph style={playersList.paragraph}>
							{player.item.alias}
							{breakLine}
							{player.item.position}
							{breakLine}
							{player.item.club}
						</Paragraph>
					</Card.Content>
					<Card.Actions style={playersList.containerButtons}>
						<Button style={playersList.icon} onPress={() => onUpdate(player)}>
							<Icon
								name="pencil"
								type="font-awesome"
								color="#16a0e2"
								size={18}
							></Icon>
						</Button>
						<Button style={playersList.icon} onPress={() => onDelete(player)}>
							<Icon
								name="trash"
								type="font-awesome"
								color="#16a0e2"
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
			style={playersList.container}
			contentContainerStyle={{ justifyContent: 'center' }}
		></FlatList>
	);
};

export default PlayersList;
