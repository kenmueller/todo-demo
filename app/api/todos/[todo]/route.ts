import { NextRequest, NextResponse } from 'next/server'

import sleep from '@/lib/sleep'
import HttpError from '@/lib/error/http'
import ErrorCode from '@/lib/error/code'
import todos from '@/lib/todos'
import errorFromUnknown from '@/lib/error/fromUnknown'

export const DELETE = async (
	_request: NextRequest,
	{ params: { todo: todoEncoded } }: { params: { todo: string } }
) => {
	try {
		const todo = decodeURIComponent(todoEncoded)

		await sleep(1000)

		if (!todos.has(todo))
			throw new HttpError(ErrorCode.NotFound, 'Todo not found')

		todos.delete(todo)

		return new NextResponse('')
	} catch (unknownError) {
		const { code, message } = errorFromUnknown(unknownError)
		return new NextResponse(message, { status: code })
	}
}
