import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	Button,
	ActivityIndicator,
	Alert
} from 'react-native';
import TodoList from '../../components/todo-list';
import { getTodos, addTodo, updateTodo, deleteTodo } from '../../data/todos';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff',
		alignItems: 'center',
		justifyContent: 'center'
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
	}
});

class MainScreen extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: [],
			newTodo: null,
			loading: true
		};
	}

	componentDidMount = async () => {
		const todos = await getTodos();
		this.setState({ todos: todos, loading: false });
	};

	handleAdd = () => {
		const { todos, newTodo } = this.state;
		const newList = addTodo(todos, { text: newTodo });
		this.setState({ todos: newList, newTodo: null });
	};

	handleUpdate = todo => {
		const { todos } = this.state;
		const newList = updateTodo(todos, todo);
		this.setState({ todos: newList });
	};

	handleDelete = todo => {
		Alert.alert('¿Quieres eliminar la tarea?', todo.text, [
			{ text: 'Cancelar', style: 'cancel' },
			{
				text: 'OK',
				onPress: () => {
					const { todos } = this.state;
					const newList = deleteTodo(todos, todo);
					this.setState({ todos: newList });
				}
			}
		]);
	};

	render() {
		const { todos, newTodo, loading } = this.state;
		return (
			<View style={styles.container}>
				<Text selectable style={styles.title}>
					ToDo List App
				</Text>
				<View style={styles.addRow}>
					<TextInput
						style={styles.text}
						placeholder='Nuevo ToDo'
						value={newTodo}
						onChangeText={todo => this.setState({ newTodo: todo })}
						autoCapitalize='words'
						clearButtonMode='always'
						returnKeyType='done'
					></TextInput>
					<Button onPress={this.handleAdd} title='Añadir'></Button>
				</View>
				{loading && (
					<ActivityIndicator style={styles.loading}></ActivityIndicator>
				)}
				{!loading && (
					<TodoList
						todos={todos}
						onUpdate={this.handleUpdate}
						onDelete={this.handleDelete}
					></TodoList>
				)}
			</View>
		);
	}
}

export default MainScreen;
