import React from 'react';

import AddNewItem from '../add-new-item/add-new-item';
import List from '../list/list';
import Loader from '../loader/loader';

export default class Header extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true
		};
	}

	componentWillMount() {
		this.props.fetchTodos();
	}

	render() {
		const { completeTodo, addTodo, todoData } = this.props;
		const { todos, loading } = todoData;

		return (
			<div>
				{/* component for adding new todo */}
				<AddNewItem formSubmit={addTodo} todos={todos} />

				{/* show loader when data is loading */}
				{loading && <Loader />}

				{/* display todos */}
				{todos.length > 0 && (
					<List todos={todos} completeTodo={completeTodo} />
				)}

				{/* display placeholder for empty state */}
				{!todos.length && (
					<h6>You don't have anything on your agenda!</h6>
				)}
			</div>
		);
	}
}
