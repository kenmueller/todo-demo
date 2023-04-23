'use client'

import scrollableState from '@/lib/atoms/scrollable'
import { ReactNode } from 'react'
import { useRecoilValue } from 'recoil'

const Scrollable = ({ children }: { children?: ReactNode }) => {
	const scrollable = useRecoilValue(scrollableState)

	return (
		<div ref={scrollable} className="flex flex-col h-full overflow-y-auto">
			{children}
		</div>
	)
}

export default Scrollable
