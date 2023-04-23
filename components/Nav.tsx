import Link from 'next/link'

const Nav = () => (
	<div>
		<nav className="flex justify-center items-center gap-4 w-[95%] mx-auto py-4">
			<Link href="/">Todos</Link>
			<Link href="/about">About</Link>
		</nav>
	</div>
)

export default Nav
