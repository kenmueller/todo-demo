import Link from 'next/link'

const Nav = () => (
	<nav className="flex justify-center items-center gap-4 py-4">
		<Link href="/">Todos</Link>
		<Link href="/about">About</Link>
	</nav>
)

export default Nav
