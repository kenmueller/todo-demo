import { atom } from 'recoil'

const todosState = atom<string[]>({
	key: 'todos',
	default: []
})

export default todosState
