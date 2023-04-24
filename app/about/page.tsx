import preview from '@/assets/preview.jpg'
import Scrollable from '@/components/Scrollable'
import pageMetadata from '@/lib/metadata/page'

export const generateMetadata = () =>
	pageMetadata({
		title: 'todo',
		description: 'todo',
		image: preview.src
	})

const AboutPage = async () => (
	<Scrollable>
		<main className="flex flex-col justify-center items-center gap-4 w-[95%] m-auto py-4">
			<h1 className="text-5xl font-black">About</h1>
		</main>
	</Scrollable>
)

export default AboutPage
