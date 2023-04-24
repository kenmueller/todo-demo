import { NextResponse } from 'next/server'

import errorFromUnknown from '@/lib/error/fromUnknown'

export const dynamic = 'force-dynamic'

export const GET = async () => {
	try {
		return NextResponse.json(
			{
				background_color: 'white',
				description: 'todo',
				display: 'standalone',
				lang: 'en',
				name: 'todo',
				short_name: 'todo',
				start_url: '/',
				orientation: 'portrait'
			},
			{
				headers: {
					'cache-control': 'no-store',
					'content-type': 'application/json'
				}
			}
		)
	} catch (unknownError) {
		const { code, message } = errorFromUnknown(unknownError)
		return new NextResponse(message, { status: code })
	}
}
