import React from 'react';
import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
	SectionList,
	Image
} from 'react-native';
import deleteImage from '../../../assets/images/delete.png';

const styles = StyleSheet.create({
	container: {
		width: '100%'
	},
	contentContainer: {
		flexGrow: 1
	},
	listItem: {
		margin: 5,
		padding: 5,
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center'
	},
	bullet: {
		width: '10%'
	},
	text: {
		flex: 1,
		marginLeft: 5,
		fontWeight: 'bold'
	},
	textDone: {
		color: '#aaa',
		textDecorationLine: 'line-through',
		fontWeight: 'normal'
	},
	delete: {
		width: 44,
		height: 44,
		alignItems: 'center',
		justifyContent: 'center'
	},
	emptyList: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	separator: {
		marginLeft: '14%',
		height: 1,
		width: '75%',
		backgroundColor: '#CED0CE'
	},
	sectionHeader: {
		backgroundColor: '#ddd',
		padding: 10
	},
	icon: {
		width: 20,
		height: 20
	},
	emptyImage: {
		width: 50,
		height: 50,
		tintColor: '#005500'
	}
});

const TodoList = ({ todos, onUpdate, onDelete }) => {
	const renderItem = todo => (
		<TouchableOpacity
			style={styles.listItem}
			key={todo.text}
			onPress={() => {
				onUpdate({ ...todo, done: !todo.done });
			}}
		>
			<Text style={styles.bullet}>-</Text>
			<Text
				style={[styles.text, todo.done ? styles.textDone : styles.text]}
				key={todo.id}
			>
				{todo.text}
			</Text>
			<TouchableOpacity style={styles.delete} onPress={() => onDelete(todo)}>
				<Image style={styles.icon} source={deleteImage}></Image>
			</TouchableOpacity>
		</TouchableOpacity>
	);

	const renderSeparator = () => <View style={styles.separator}></View>;

	const renderEmptyComponent = () => (
		<View style={styles.emptyList}>
			<Image
				style={styles.emptyImage}
				source={require('../../../assets/images/check.png')}
			></Image>
			<Text>Empty list</Text>
		</View>
	);

	const renderSectionHeader = ({ section: { title, data } }) => (
		<View style={styles.sectionHeader}>
			<Text>
				{title}({data.length})
			</Text>
		</View>
	);

	return (
		<SectionList
			sections={
				todos && todos.length
					? [
							{ title: 'To do', data: todos.filter(todo => !todo.done) },
							{ title: 'Done', data: todos.filter(todo => todo.done) }
					  ]
					: []
			}
			renderItem={({ item }) => renderItem(item)}
			renderSectionHeader={renderSectionHeader}
			keyExtractor={todo => todo.id}
			//contentContainerStyle={styles.container}
			style={styles.container}
			ItemSeparatorComponent={renderSeparator}
			ListEmptyComponent={renderEmptyComponent}
			stickySectionHeadersEnabled
		></SectionList>
	);
};

export default TodoList;
