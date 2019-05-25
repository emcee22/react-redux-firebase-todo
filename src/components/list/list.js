import React from 'react';
import { Table } from 'react-bootstrap';
import moment from 'moment';
import ListItem from '../list-item/list-item';
import './list.css';

export default class List extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dateToCompare: moment()
		};
	}

	renderTodo = () => {
		const { todos } = this.props;
		const toDos = todos.map((value, key) => {
			return (
				<ListItem
					key={key}
					todo={value}
					completeTodo={this.props.completeTodo}
					dateToCompare={this.state.dateToCompare}
				/>
			);
		});
		return toDos;
	};

	render() {
		return (
			<Table>
				<thead className='thead-dark'>
					<tr>
						<th scope='col'>Status</th>
						<th scope='col'>Title</th>
						<th scope='col'>Priority</th>
						<th scope='col'>Due date</th>
						<th scope='col'>Complete</th>
						<th scope='col'>Add by</th>
					</tr>
				</thead>
				<tbody>{this.renderTodo()}</tbody>
			</Table>
		);
	}
}
