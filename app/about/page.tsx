if (!process.env.NEXT_PUBLIC_ORIGIN)
	throw new Error('Missing NEXT_PUBLIC_ORIGIN')

import { Metadata } from 'next'

import preview from '@/assets/preview.jpg'

const url = `${process.env.NEXT_PUBLIC_ORIGIN}/about`
const title = 'about | todo'
const description = 'about | todo'

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

const AboutPage = async () => (
	<div className="flex flex-col h-full overflow-y-auto">
		<main className="flex flex-col justify-center items-center gap-4 w-[95%] m-auto py-4">
			<h1 className="text-5xl font-black">About</h1>
		</main>
	</div>
)

export default AboutPage
