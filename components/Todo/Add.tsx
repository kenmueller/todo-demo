'use client'

import {
	ChangeEvent,
	FormEvent,
	useCallback,
	useEffect,
	useRef,
	useState
} from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'

import todosState from '@/lib/atoms/todos'
import errorFromResponse from '@/lib/error/fromResponse'
import errorFromUnknown from '@/lib/error/fromUnknown'
import HttpError from '@/lib/error/http'
import scrollableState from '@/lib/atoms/scrollable'

const AddTodo = () => {
	const setTodos = useSetRecoilState(todosState)

	const scrollable = useRecoilValue(scrollableState)
	const input = useRef<HTMLInputElement | null>(null)

	const [name, setName] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState<HttpError | null>(null)

	const onSubmit = useCallback(
		async (event: FormEvent<HTMLFormElement>) => {
			event.preventDefault()

			try {
				setIsLoading(true)
				setError(null)

				const response = await fetch('/api/todos', {
					method: 'POST',
					body: name
				})

				if (!response.ok) throw await errorFromResponse(response)

				setName('')
				setTodos(todos => [...todos, name])
			} catch (unknownError) {
				setError(errorFromUnknown(unknownError))
			} finally {
				setIsLoading(false)

				if (scrollable.current)
					scrollable.current.scrollTop = scrollable.current.scrollHeight
			}
		},
		[setTodos, name, setName, setIsLoading, setError, scrollable]
	)

	const onChange = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			setName(event.target.value)
			setError(null)
		},
		[setName, setError]
	)

	useEffect(() => {
		if (!isLoading) input.current?.focus()
	}, [isLoading, input])

	return (
		<form className="flex flex-col items-start gap-2" onSubmit={onSubmit}>
			<div className="flex items-center gap-4">
				<input
					ref={input}
					className="px-4 py-2 border-2 rounded-md outline-none focus:border-sky-300"
					placeholder="Todo"
					disabled={isLoading}
					value={name}
					onChange={onChange}
				/>
				<button
					className="font-bold text-sky-500 disabled:text-neutral-400 disabled:opacity-50"
					disabled={!name || isLoading}
				>
					Add
				</button>
			</div>
			{error && <p className="text-red-500">{error.message}</p>}
		</form>
	)
}

export default AddTodo
