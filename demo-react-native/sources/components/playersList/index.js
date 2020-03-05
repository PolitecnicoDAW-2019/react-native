import React from 'react';
import { FlatList, View } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { Icon } from 'react-native-elements';
import { breakLine } from '../../constants';
import { playersList } from '../../styles';

const PlayersList = ({ players, onDelete, onEdit }) => {
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
							{breakLine}
							{player.item.birthdate}
							{breakLine}
							{player.item.history}
						</Paragraph>
					</Card.Content>
					<Card.Actions style={playersList.containerButtons}>
						<Icon
							style={playersList.icon}
							onPress={() => onEdit(player)}
							name="pencil"
							type="font-awesome"
							color="#4962f6"
							size={18}
						></Icon>
						<Icon
							style={playersList.icon}
							onPress={() => onDelete(player)}
							name="trash"
							type="font-awesome"
							color="#4962f6"
							size={18}
						></Icon>
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
		></FlatList>
	);
};

export default PlayersList;
