'use client'

import { useCallback, useState } from 'react'
import { useSetRecoilState } from 'recoil'

import todosState from '@/lib/atoms/todos'
import errorFromResponse from '@/lib/error/fromResponse'
import alertError from '@/lib/error/alert'
import errorFromUnknown from '@/lib/error/fromUnknown'

const TodoListItem = ({ todo }: { todo: string }) => {
	const setTodos = useSetRecoilState(todosState)

	const [isLoading, setIsLoading] = useState(false)

	const deleteTodo = useCallback(async () => {
		try {
			setIsLoading(true)

			const response = await fetch(`/api/todos/${encodeURIComponent(todo)}`, {
				method: 'DELETE'
			})

			if (!response.ok) throw await errorFromResponse(response)

			setTodos(todos => todos.filter(otherTodo => otherTodo !== todo))
		} catch (unknownError) {
			alertError(errorFromUnknown(unknownError))
		} finally {
			setIsLoading(false)
		}
	}, [todo, setTodos, setIsLoading])

	return (
		<li>
			<button
				className="hover:text-white hover:bg-red-500 disabled:text-white disabled:bg-red-500 disabled:opacity-50"
				disabled={isLoading}
				onClick={deleteTodo}
			>
				{todo}
			</button>
		</li>
	)
}

export default TodoListItem
