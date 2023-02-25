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
						{/* <h1 className="font-extrabold text-2xl rounded-full border border-zinc-700 p-4 mr-3">
							RR
						</h1> */}
						<Image
							src="/logo-1.png"
							alt="Logo"
							width={50}
							height={50}
							className="object-contain"
						/>
						<Link href="https://discord.gg/34HAq7DYAQ">Discord</Link>
						<Link href="https://robo-rift.gitbook.io/robo-rift-whitepaper/">
							Whitepaper
						</Link>
						<Link href="#roadmap">Roadmap</Link>
					</nav>
					<div className="flex">
						<Link href="https://play.roborift.world/">
							<a className="px-5 py-3 rounded-xl bg-pink-600 ml-3 font-semibold text-sm">
								Play Game
							</a>
						</Link>
					</div>
				</div>
			</div>

			<main className="max-w-7xl mx-auto my-5">
				<div>
					<div className="flex justify-between items-center py-12">
						<div className="max-w-xl ml-5">
							<h2 className="font-orbitron text-5xl font-bold my-4 leading-tight tracking-wide">
								Welcome to the future, players!
							</h2>
							<p className="text-zinc-400 mt-5 mb-10">
								Welcome to Robo Rift, the cutting-edge wax-based
								player-to-player (P2P) game where you&apos;ll experience the
								thrill of robot fighting and staking.
							</p>
							<Link href="https://play.roborift.world/">
								<a className="px-8 py-3 rounded-xl bg-pink-600 font-semibold my-5">
									Play Now
								</a>
							</Link>
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
					<div className="flex justify-center items-center py-8">
						<div className="inline-block w-6 h-0.5 bg-zinc-500 rotate-45"></div>
						<div className="inline-block w-6 h-0.5 bg-zinc-500 -rotate-45 -ml-2"></div>
					</div>
				</div>
				<div className="my-24">
					<div>
						<p className="font-orbitron text-sm tracking-[0.5em] text-pink-500 text-center py-4">
							GAMEPLAY
						</p>
						<h2 className="text-center text-5xl font-bold">About the game</h2>
					</div>
					<div className=" my-16">
						<div className="flex justify-between items-center my-5 mx-10">
							<div className="w-1/2">
								<h2 className="font-semibold text-3xl text-left font-orbitron tracking-widest my-2">
									Staking
								</h2>
								<p className="text-zinc-400">
									Stake RX in Robo Rift for powerful equipment. Connect bootable
									flash drive to generate RX & RA. Participate in events &
									challenges to optimize strategies & become the ultimate
									champion. Start staking now towards becoming king of the rift.
								</p>
							</div>
							<div>
								<Image
									src="/drive.png"
									alt="Drive Staking"
									width={500}
									height={500}
									className="object-contain"
								/>
							</div>
						</div>
						<div className="flex flex-row-reverse justify-between items-center my-5 mx-10">
							<div className="w-1/2">
								<h2 className="font-semibold text-3xl text-left font-orbitron tracking-widest my-2">
									Training Rift
								</h2>
								<p className="text-zinc-400">
									Test your skills in the Training Arena! Face off against
									hordes of enemy robots to sharpen your skills and strengthen
									your army. Earn rewards in the form of RA and equip your
									robots with upgrades. As you progress, take on tougher
									opponents and prove your worth. Join the elite and show your
									mettle in the Training Arena!
								</p>
							</div>
							<div>
								<Image
									src="/training.png"
									alt="Training"
									width={500}
									height={500}
									className="object-contain"
								/>
							</div>
						</div>
					</div>
					<div className="flex justify-between items-center my-5 mx-10">
						<div className="w-1/2">
							<h2 className="font-semibold text-3xl text-left font-orbitron tracking-widest my-2">
								Royal Arena
							</h2>
							<p className="text-zinc-400">
								Ready to prove you&apos;re one of the best? Step into the Royal
								Arena and battle against the most powerful robots in the
								universe. With the right skills and equipment, you can take your
								place among the elite and claim substantial rewards, including
								Rift Alpha (RA) and rare equipment. So, if you&apos;re ready for
								the ultimate showdown, then it&apos;s time to enter the Royal
								Arena and battle for glory!
							</p>
						</div>
						<div>
							<Image
								src="/royal-arena.png"
								alt="Royal Arena"
								width={500}
								height={500}
								className="object-contain"
							/>
						</div>
					</div>
				</div>

				<div className="my-24" id="roadmap">
					<div>
						<p className="font-orbitron text-sm tracking-[0.5em] text-pink-500 text-center py-4">
							ROADMAP
						</p>
						<h2 className="text-center text-5xl font-bold">Our project plan</h2>
					</div>
					<div className="grid grid-cols-2 gap-12 my-20">
						<div className="bg-gray-800 border border-gray-700 px-8 py-5 rounded-xl">
							<h3 className="font-orbitron text-pink-600 text-2xl tracking-widest font-semibold">
								1. Atomic collection
							</h3>
							<p className="text-zinc-300">
								Creating our collection on atomichub.
							</p>
						</div>
						<div className="bg-gray-800 border border-gray-700 px-8 py-5 rounded-xl">
							<h3 className="font-orbitron text-pink-600 text-2xl tracking-widest font-semibold">
								2. Game creating and website
							</h3>
							<p className="text-zinc-300">
								Creation of game and the landing page.
							</p>
						</div>
						<div className="bg-gray-800 border border-gray-700 px-8 py-5 rounded-xl">
							<h3 className="font-orbitron text-pink-600 text-2xl tracking-widest font-semibold">
								3. Completed smart contracts
							</h3>
							<p className="text-zinc-300">Smart contract for the game.</p>
						</div>
						<div className="bg-gray-800 border border-gray-700 px-8 py-5 rounded-xl">
							<h3 className="font-orbitron text-pink-600 text-2xl tracking-widest font-semibold">
								4. In-game Staking
							</h3>
							<p className="text-zinc-300">
								Launch of <b>Staking</b>. One of the three main game features.
							</p>
						</div>
						<div className="bg-gray-800 border border-gray-700 px-8 py-5 rounded-xl">
							<h3 className="font-orbitron text-pink-600 text-2xl tracking-widest font-semibold">
								5. Application for whitelist
							</h3>
							<p className="text-zinc-300">
								Applying for whitelist to atomichub.
							</p>
						</div>
						<div className="bg-gray-800 border border-gray-700 px-8 py-5 rounded-xl">
							<h3 className="font-orbitron text-pink-600 text-2xl tracking-widest font-semibold">
								6. Pass Sale
							</h3>
							<p className="text-zinc-300">
								First sale for the game pass which is stakable and have infinite
								durability.
							</p>
						</div>
						<div className="bg-gray-800 border border-gray-700 px-8 py-5 rounded-xl">
							<h3 className="font-orbitron text-pink-600 text-2xl tracking-widest font-semibold">
								7. Data pack sale
							</h3>
							<p className="text-zinc-300">
								Sale for the Data pack, which is used to blend different items.
							</p>
						</div>
						<div className="bg-gray-800 border border-gray-700 px-8 py-5 rounded-xl">
							<h3 className="font-orbitron text-pink-600 text-2xl tracking-widest font-semibold">
								8. In-game exchange & token listing on Alcor exchange
							</h3>
							<p className="text-zinc-300">
								Lauch of in-game exchange and token listing on Alcor exchange.
							</p>
						</div>
						<div className="bg-gray-800 border border-gray-700 px-8 py-5 rounded-xl">
							<h3 className="font-orbitron text-pink-600 text-2xl tracking-widest font-semibold">
								9. In-game shop
							</h3>
							<p className="text-zinc-300">
								In-game shop which will give the in-game buy/sell ability.
							</p>
						</div>
						<div className="bg-gray-800 border border-gray-700 px-8 py-5 rounded-xl">
							<h3 className="font-orbitron text-pink-600 text-2xl tracking-widest font-semibold">
								10. Robo & Rift pack sale
							</h3>
							<p className="text-zinc-300">
								Robots and rifts, collect all of them from the sale.
							</p>
						</div>
						<div className="bg-gray-800 border border-gray-700 px-8 py-5 rounded-xl">
							<h3 className="font-orbitron text-pink-600 text-2xl tracking-widest font-semibold">
								11. Training rift & Royal arena
							</h3>
							<p className="text-zinc-300">
								Lauch of two other main game features.
							</p>
						</div>
						<div className="bg-gray-800 border border-gray-700 px-8 py-5 rounded-xl">
							<h3 className="font-orbitron text-pink-600 text-2xl tracking-widest font-semibold">
								12. PvP & Royal Rumble
							</h3>
							<p className="text-zinc-300">
								Player vs player and royal rumble, expanding the game.
							</p>
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}
