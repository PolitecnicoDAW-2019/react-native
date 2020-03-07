import React from 'react';
import { FlatList, View } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { Icon } from 'react-native-elements';
import { BREAKLINE, COLOR_PRIMARY } from '../../constants';
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
							{BREAKLINE}
							{player.item.position}
							{BREAKLINE}
							{player.item.club}
							{BREAKLINE}
							{player.item.birthdate}
							{BREAKLINE}
							{player.item.history}
						</Paragraph>
					</Card.Content>
					<Card.Actions style={playersList.containerButtons}>
						<Icon
							raised
							style={playersList.icon}
							onPress={() => onEdit(player)}
							name="pencil"
							type="font-awesome"
							color={COLOR_PRIMARY}
							size={18}
						></Icon>
						<Icon
							raised
							style={playersList.icon}
							onPress={() => onDelete(player)}
							name="trash"
							type="font-awesome"
							color={COLOR_PRIMARY}
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
