import { MutableRefObject } from 'react'
import { atom } from 'recoil'

const scrollableState = atom<MutableRefObject<HTMLDivElement | null>>({
	key: 'scrollable',
	default: { current: null },
	dangerouslyAllowMutability: true
})

export default scrollableState
