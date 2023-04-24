import errorFromResponse from '@/lib/error/fromResponse'
import getUrl from '@/lib/getUrl'
import { cache } from 'react'

const getTodos = cache(async () => {
	const url = getUrl()

	const response = await fetch(`${url.origin}/api/todos`)
	if (!response.ok) throw await errorFromResponse(response)

	return (await response.json()) as string[]
})

export default getTodos
