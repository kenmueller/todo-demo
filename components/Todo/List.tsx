'use client'

import { useRecoilValue } from 'recoil'

import todosState from '@/lib/atoms/todos'
import TodoListItem from './ListItem'

const TodoList = () => {
	const todos = useRecoilValue(todosState)

	return (
		<ol className="flex flex-col items-center gap-2 list-decimal">
			{todos.map((todo, index) => (
				<TodoListItem key={index} todo={todo} />
			))}
		</ol>
	)
}

export default TodoList
