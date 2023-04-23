if (!process.env.NEXT_PUBLIC_ORIGIN)
	throw new Error('Missing NEXT_PUBLIC_ORIGIN')

import { Suspense } from 'react'
import { Metadata } from 'next'

import preview from '@/assets/preview.jpg'
import SetHomeState from '@/components/Home/SetState'
import TodoList from '@/components/Todo/List'
import AddTodo from '@/components/Todo/Add'
import Await from '@/components/Await'
import getTodos from '@/lib/getTodos'
import Scrollable from '@/components/Scrollable'

const url = process.env.NEXT_PUBLIC_ORIGIN
const title = 'todo'
const description = 'todo'

export const metadata: Metadata = {
	alternates: { canonical: url },
	title,
	description,
	openGraph: {
		type: 'website',
		title,
		description,
		siteName: 'todo',
		locale: 'en_US',
		url,
		images: preview.src,
		countryName: 'United States'
	},
	twitter: {
		card: 'summary_large_image',
		site: '@todo',
		creator: '@todo',
		title,
		description,
		images: preview.src
	}
}

const HomePage = async () => {
	const todos = getTodos()

	return (
		<Scrollable>
			<main className="flex flex-col justify-center items-center gap-4 w-[95%] m-auto py-4">
				<SetHomeState todos={todos} />
				<h1 className="text-5xl font-black">todo</h1>
				<Suspense fallback={<p>Loading...</p>}>
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
