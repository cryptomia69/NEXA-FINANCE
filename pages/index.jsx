import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
	return (
		<div className="text-white">
			<Head>
				<title>
					NURO VOID | Cultivate Your Future in the Void
				</title>
				<meta
					name="description"
					content="An innovative financial ecosystem designed for the future."
				/>
			</Head>

			<div className="border-zinc-800 pt-2 md:pt-8 md:mx-5">
				<div className="max-w-7xl flex h-24 justify-between items-center px-12 md:px-0 mx-auto">
					<nav className="flex items-center font-bold space-x-4 md:space-x-8 text-sm md:text-base">
						{/* <h1 className="font-extrabold text-2xl rounded-full border border-zinc-700 p-4 mr-3">
							RR
						</h1> */}
						<div className="w-10 md:w-auto">
							{/* <Image
								src="/nexalogo.png"
								alt="Logo"
								width={50}
								height={50}
								className="object-contain"
							/> */}
						</div>
						<Link href="https://t.me/nexafi">Join Community</Link>
						<Link href="https://x.com/nexafinance?t=UQNgf2fQtz_YuhFNI8JQpA&s=09">
							Twitter
						</Link>
						<Link href="https://nexa-finance.gitbook.io/nexa-finance/">
							<a className="hidden md:block">Whitepaper</a>
						</Link>
						<Link href="https://spotlights.nexafinance.online/">
							<a className="https://spotlights.nexafinance.online/">Spotlights</a>
						</Link>
					</nav>
					<div className="flex">
						<Link href="https://t.me/nexafibot/app">
							<a className="px-5 py-3 rounded-xl btn-normal ml-3 font-semibold text-sm hidden md:block">
								Play Game
							</a>
						</Link>
					</div>
				</div>
			</div>

			<main className="max-w-7xl mx-auto my-2 2xl:my-5">
				<div>
					<div className="text-center md:text-left flex flex-col md:flex-row justify-between items-center py-2 md:py-24 2xl:py-12 mx-14 2xl:mx-8">
						<div className="max-w-xl ml-5">
							<h2 className="font-sans text-3xl md:text-5xl font-bold my-4 leading-tight tracking-wide">
								Welcome to the future, players!
							</h2>
							<p className="text-zinc-400 mt-5 mb-10">
								NuroVoid is an engaging Telegram-based farming game where players collect Void points as they progress.
								These Void points aren't just for show; they come with the promise of a future NVDX airdrop,
								giving every player a guaranteed reward. Get ready to farm, collect, and prepare for the upcoming NVDX drop in NuroVoid!
							</p>
							<Link href="https://t.me/nexafibot/app">
								<a className="px-8 py-3 rounded-xl btn-normal font-semibold my-5">
									Play Now
								</a>
							</Link>
						</div>
						<div className="w-auto lg:w-96 2xl:w-auto my-8 md:my-0">
							<Image
								src="/token.png"
								alt="Error Loading"
								width={600}
								height={600}
								className="object-contain"
							/>
						</div>
					</div>
					<div className="flex justify-center items-center py-2 md:py-8">
						<div className="inline-block w-6 h-0.5 bg-zinc-500 rotate-45"></div>
						<div className="inline-block w-6 h-0.5 bg-zinc-500 -rotate-45 -ml-2"></div>
					</div>
				</div>

				<div className=" md:my-24" id="roadmap">
					<div>
						<p className="font-sans text-xs md:text-sm tracking-[0.5em] text-sky-500 text-center py-2 md:py-4">
							ROADMAP
						</p>
						<h2 className="text-center text-3xl md:text-5xl font-bold">
							Our project plan
						</h2>
					</div>
					<div className="w-auto my-20 mx-10">
						<Image
							src="/roadmap3.png"
							alt="Error Loading"
							width={1280}
							height={568.295988}
							className="object-contain"
						/>
					</div>
				</div>

				<hr className="border-zinc-800" />

				<div className="flex flex-col sm:flex-row text-center sm:text-left justify-between items-center mx-8 my-14">
					<div>
						<h4 className="font-sans text-3xl font-bold tracking-wider py-1">
							NEXA FINANCE
						</h4>
						<p className="text-sm">&copy; 2024. All rights reserved.</p>
					</div>
					{/* <div className="flex flex-col items-center sm:items-end pt-8 sm:pt-0">
						<p className="text-sm py-1">Development partner</p>
						<Link href="https://designholt.net/">
							<a className="" target="_blank">
								<Image
									src="/designholt-logo.png"
									alt="Designholt"
									width={100}
									height={22}
									className="object-contain"
								/>
							</a>
						</Link>
					</div> */}
				</div>
			</main>
		</div>
	)
}
