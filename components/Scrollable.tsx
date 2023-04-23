'use client'

import { ReactNode } from 'react'
import { useRecoilValue } from 'recoil'

import scrollableRef from '@/lib/atoms/scrollable'

const Scrollable = ({ children }: { children?: ReactNode }) => {
	const scrollable = useRecoilValue(scrollableRef)

	return (
		<div ref={scrollable} className="flex flex-col h-full overflow-y-auto">
			{children}
		</div>
	)
}

export default Scrollable
