import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
	return (
		<div className="text-white">
			<Head>
				<title>
					RoboRift | The cutting-edge wax-based player-to-player (P2P) game
				</title>
				<meta
					name="description"
					content="The cutting-edge wax-based player-to-player (P2P) game"
				/>
			</Head>

			<div className="border-zinc-800 pt-8">
				<div className="max-w-7xl flex h-24 justify-between items-center mx-auto">
					<nav className="flex items-center font-bold space-x-8">
						<h1 className="font-extrabold text-2xl rounded-full border border-zinc-700 p-4 mr-3">
							RR
						</h1>
						<Link href="#">Discord</Link>
						<Link href="#">Whitepaper</Link>
						<Link href="#">Roadmap</Link>
					</nav>
					<div className="flex">
						<button className="px-5 py-3 rounded-xl bg-pink-600 ml-3 font-semibold text-sm">
							Play Game
						</button>
					</div>
				</div>
			</div>

			<main className="max-w-7xl mx-auto my-5">
				<div className="flex justify-between items-center py-5">
					<div className="max-w-xl ml-5">
						<h2 className="font-orbitron text-5xl font-bold my-4 leading-tight tracking-wide">
							Welcome to the future, players!
						</h2>
						<p className="text-zinc-400 mt-5 mb-10">
							Welcome to Robo Rift, the cutting-edge wax-based player-to-player
							(P2P) game where you&apos;ll experience the thrill of robot
							fighting and staking.
						</p>
						<a className="px-8 py-3 rounded-xl bg-pink-600 font-semibold my-5">
							Play Now
						</a>
					</div>
					<div className="">
						<Image
							src="/server.png"
							alt="Server"
							width={600}
							height={600}
							className="object-contain"
						/>
					</div>
				</div>
				<div className="mt-8"></div>
			</main>
		</div>
	)
}
