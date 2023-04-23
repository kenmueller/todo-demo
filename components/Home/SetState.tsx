'use client'

import { useSetRecoilState } from 'recoil'

import todosState from '@/lib/atoms/todos'
import useOnMount from '@/lib/useOnMount'

const SetHomeState = ({ todos }: { todos: Promise<string[]> }) => {
	const setTodos = useSetRecoilState(todosState)

	useOnMount(() => {
		todos.then(setTodos)
	})

	return null
}

export default SetHomeState
