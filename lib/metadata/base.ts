import { Metadata } from 'next'

import favicon from '@/assets/favicon.png'
import getUrl from '@/lib/getUrl'

const baseMetadata = (): Metadata => {
	const url = getUrl()

	return {
		metadataBase: new URL(url.origin),
		applicationName: 'todo',
		authors: [{ name: 'Ken Mueller', url: url.origin }],
		publisher: 'Ken Mueller',
		creator: 'Ken Mueller',
		themeColor: 'white',
		manifest: '/manifest.webmanifest',
		icons: favicon.src
	}
}

export default baseMetadata
