import { NextRequest, NextResponse } from 'next/server'

import sleep from '@/lib/sleep'
import HttpError from '@/lib/error/http'
import ErrorCode from '@/lib/error/code'
import todos from '@/lib/todos'
import errorFromUnknown from '@/lib/error/fromUnknown'

export const GET = async () => {
	try {
		await sleep(1000)

		return NextResponse.json(Array.from(todos), {
			headers: { 'cache-control': 'no-store' }
		})
	} catch (unknownError) {
		const { code, message } = errorFromUnknown(unknownError)
		return new NextResponse(message, { status: code })
	}
}

export const POST = async (request: NextRequest) => {
	try {
		const todo = await request.text()

		await sleep(1000)

		if (todos.has(todo))
			throw new HttpError(ErrorCode.BadRequest, 'Todo already exists')

		todos.add(todo)

		return new NextResponse('')
	} catch (unknownError) {
		const { code, message } = errorFromUnknown(unknownError)
		return new NextResponse(message, { status: code })
	}
}
