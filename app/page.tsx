import { Suspense } from 'react'

import preview from '@/assets/preview.jpg'
import SetHomeState from '@/components/Home/SetState'
import TodoList from '@/components/Todo/List'
import AddTodo from '@/components/Todo/Add'
import Await from '@/components/Await'
import getTodos from '@/lib/getTodos'
import Scrollable from '@/components/Scrollable'
import pageMetadata from '@/lib/metadata/page'

export const generateMetadata = () =>
	pageMetadata({
		title: 'todo',
		description: 'todo',
		image: preview.src
	})

const HomePage = async () => {
	const todos = getTodos()

	return (
		<Scrollable>
			<main className="flex flex-col justify-center items-center gap-4 w-[95%] m-auto py-4">
				<SetHomeState todos={todos} />
				<h1 className="text-5xl font-black">todo</h1>
				<Suspense fallback={<p>loading...</p>}>
					{/* @ts-expect-error */}
					<Await promise={todos}>
						<TodoList />
					</Await>
				</Suspense>
				<AddTodo />
			</main>
		</Scrollable>
	)
}

export default HomePage
