import { todosRef } from '../firebase';

export const FETCH_TODOS_START = 'FETCH_TODOS_START';
export const FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR';
export const FETCH_TODOS_COMPLETED = 'FETCH_TODOS_COMPLETED';
export const FETCH_TODOS_EVENT = 'FETCH_TODOS_EVENT';

// this should set the state also on loading
export const addTodo = newToDo => {
	return dispatch => {
		dispatch({ type: FETCH_TODOS_START });
		todosRef.push().set(newToDo, error => {
			if (error) {
				dispatch({ type: FETCH_TODOS_ERROR, error: error });
			} else {
				dispatch({ type: FETCH_TODOS_COMPLETED });
			}
		});
	};
};

export const completeTodo = completeToDo => {
	return dispatch => {
		dispatch({ type: FETCH_TODOS_START });
		todosRef
			.child(completeToDo)
			.remove()
			.then(() => {
				dispatch({ type: FETCH_TODOS_COMPLETED });
			});
	};
};

// this should remove the state from loading
export const fetchTodos = () => {
	return dispatch => {
		todosRef.on('value', snapshot => {
			dispatch({
				type: FETCH_TODOS_EVENT,
				payload: snapshot.val()
			});
		});
	};
};
