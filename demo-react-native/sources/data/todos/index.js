import uuid from 'uuid/v1';

const getTodos = async () => {
	return [
		newTodo({ text: 'Tarea 1', done: false }),
		newTodo({ text: 'Tarea 2', done: false }),
		newTodo({ text: 'Tarea 3', done: true })
	];
};

const newTodo = todo => ({
	id: uuid(),
	text: todo.text,
	createdAt: new Date(),
	done: todo.done
	//priority: todo.priority
});

const updateTodo = (list, todo) => {
	const updateIndex = list.findIndex(t => t.id === todo.id);
	const newTodoList = [...list]; //clonar porque es inmutable
	newTodoList[updateIndex] = todo;
	return newTodoList;
};

const addTodo = (list, todo) => [...(list || []), newTodo(todo)];

const deleteTodo = (list, todo) => list.filter(t => t.id !== todo.id);

export { getTodos, addTodo, updateTodo, deleteTodo };
