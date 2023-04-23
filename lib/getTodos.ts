import errorFromResponse from './error/fromResponse'

if (!process.env.NEXT_PUBLIC_ORIGIN)
	throw new Error('Missing NEXT_PUBLIC_ORIGIN')

const getTodos = async () => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_ORIGIN!}/api/todos`, {
		cache: 'no-store'
	})

	if (!response.ok) throw await errorFromResponse(response)

	return (await response.json()) as string[]
}

export default getTodos
