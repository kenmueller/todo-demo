if (!process.env.NEXT_PUBLIC_ORIGIN)
	throw new Error('Missing NEXT_PUBLIC_ORIGIN')

import { ReactNode } from 'react'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import cx from 'classnames'

import RecoilRoot from '@/components/Recoil/Root'
import Nav from '@/components/Nav'
import favicon from '@/assets/favicon.png'

import './layout.scss'

const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '700', '900'],
	fallback: [
		'system-ui',
		'-apple-system',
		'BlinkMacSystemFont',
		'Segoe UI',
		'Roboto',
		'Oxygen',
		'Ubuntu',
		'Cantarell',
		'Open Sans',
		'Helvetica Neue',
		'sans-serif'
	]
})

const sfMono = localFont({
	variable: '--font-sf-mono',
	src: '../assets/SFMono-Regular.otf',
	weight: '400',
	fallback: ['Consolas', 'Liberation Mono', 'Menlo', 'Courier', 'monospace']
})

export const metadata: Metadata = {
	metadataBase: new URL(process.env.NEXT_PUBLIC_ORIGIN),
	applicationName: 'todo',
	authors: [{ name: 'Ken Mueller', url: process.env.NEXT_PUBLIC_ORIGIN }],
	publisher: 'Ken Mueller',
	creator: 'Ken Mueller',
	themeColor: 'white',
	manifest: '/manifest.webmanifest',
	icons: favicon.src
}

const RootLayout = ({ children }: { children: ReactNode }) => (
	<html lang="en" dir="ltr" className="h-full">
		<body className={cx(inter.className, sfMono.variable, 'h-full')}>
			<RecoilRoot>
				<div className="grid grid-rows-[auto_1fr] h-full">
					<Nav />
					{children}
				</div>
			</RecoilRoot>
		</body>
	</html>
)

export default RootLayout
