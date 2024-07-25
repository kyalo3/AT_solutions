/**
 * v0 by Vercel.
 * @see https://v0.dev/t/yuhp5ZMNJr6
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-[#002244] text-white py-4 px-6 md:px-10">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="#" className="text-2xl font-bold flex items-center" prefetch={false}>
            <ClubIcon className="mr-2 h-8 w-8" />
            Afri-Betting
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#" className="hover:text-[#ffd700]" prefetch={false}>
              Home
            </Link>
            <Link href="#" className="hover:text-[#ffd700]" prefetch={false}>
              Sports
            </Link>
            <Link href="#" className="hover:text-[#ffd700]" prefetch={false}>
              Live Betting
            </Link>
            <Link href="#" className="hover:text-[#ffd700]" prefetch={false}>
              Casino
            </Link>
            <Link href="#" className="hover:text-[#ffd700]" prefetch={false}>
              Promotions
            </Link>
            <Dialog>
              <DialogTrigger asChild>
                <Link href="#" className="hover:text-[#ffd700]" prefetch={false}>
                  Sign Up
                </Link>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Sign Up</DialogTitle>
                  <DialogDescription>Fill out the form to create your account.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid items-center grid-cols-4 gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input id="name" placeholder="Enter your name" className="col-span-3" />
                  </div>
                  <div className="grid items-center grid-cols-4 gap-4">
                    <Label htmlFor="age" className="text-right">
                      Age
                    </Label>
                    <Input id="age" type="number" min="18" placeholder="Enter your age" className="col-span-3" />
                  </div>
                  <div className="grid items-center grid-cols-4 gap-4">
                    <Label htmlFor="phone" className="text-right">
                      Phone Number
                    </Label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" className="col-span-3" />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Sign Up</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <Link href="#" className="hover:text-[#ffd700]" prefetch={false}>
              Login
            </Link>
          </nav>
          <Button variant="outline" className="md:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation</span>
          </Button>
        </div>
      </header>
      <main className="flex-1 bg-white">
        <section className="py-10 px-6 md:px-10">
          <div className="container mx-auto">
            <h1 className="text-3xl font-bold mb-6">Welcome to Afri-Betting</h1>
            <p className="text-lg mb-8">
              Afri-Betting is your premier destination for sports betting and casino gaming. Enjoy a wide range of
              markets, live in-play betting, and exciting promotions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Sports Betting</h2>
                <p className="mb-4">
                  Bet on your favorite sports, including football, basketball, tennis, and more. Our platform offers
                  competitive odds and a user-friendly interface.
                </p>
                <Link href="#" className="text-[#002244] font-bold" prefetch={false}>
                  Explore Sports Betting
                </Link>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Live Betting</h2>
                <p className="mb-4">
                  Experience the thrill of live betting with our real-time updates and in-play markets. Follow the
                  action and place bets as the game unfolds.
                </p>
                <Link href="#" className="text-[#002244] font-bold" prefetch={false}>
                  Explore Live Betting
                </Link>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Casino</h2>
                <p className="mb-4">
                  Enjoy a wide selection of casino games, including slots, table games, and live dealer experiences.
                  Experience the thrill of the casino from the comfort of your home.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <img src="/placeholder.svg" alt="Blackjack" width={200} height={150} className="rounded-lg mb-2" />
                    <h3 className="text-lg font-bold mb-2">Blackjack</h3>
                    <p className="text-gray-700 text-sm">
                      Experience the classic casino game with our live dealer tables.
                    </p>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <img src="/placeholder.svg" alt="Roulette" width={200} height={150} className="rounded-lg mb-2" />
                    <h3 className="text-lg font-bold mb-2">Roulette</h3>
                    <p className="text-gray-700 text-sm">
                      Spin the wheel and try your luck with our exciting roulette tables.
                    </p>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <img src="/placeholder.svg" alt="Slots" width={200} height={150} className="rounded-lg mb-2" />
                    <h3 className="text-lg font-bold mb-2">Slots</h3>
                    <p className="text-gray-700 text-sm">
                      Spin the reels and try your luck with our wide selection of slot games.
                    </p>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <img src="/placeholder.svg" alt="Baccarat" width={200} height={150} className="rounded-lg mb-2" />
                    <h3 className="text-lg font-bold mb-2">Baccarat</h3>
                    <p className="text-gray-700 text-sm">
                      Experience the elegance of baccarat with our live dealer tables.
                    </p>
                  </div>
                </div>
                <Link href="#" className="text-[#002244] font-bold mt-4" prefetch={false}>
                  Explore Casino
                </Link>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Promotions</h2>
                <p className="mb-4">
                  Take advantage of our exciting promotions and bonuses to enhance your betting experience. From welcome
                  offers to ongoing rewards, we've got you covered.
                </p>
                <Link href="#" className="text-[#002244] font-bold" prefetch={false}>
                  Explore Promotions
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="py-10 px-6 md:px-10 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <img
                    src="/placeholder.svg"
                    alt="Customer Avatar"
                    width={40}
                    height={40}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-bold">John Doe</h3>
                    <div className="flex items-center text-yellow-500">
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">
                  "I've been using Afri-Betting for a while now and I'm\n impressed with the wide range of sports and
                  markets they\n offer. The live betting feature is especially exciting."
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <img
                    src="/placeholder.svg"
                    alt="Customer Avatar"
                    width={40}
                    height={40}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-bold">Jane Smith</h3>
                    <div className="flex items-center text-yellow-500">
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">
                  "The casino games on Afri-Betting are top-notch. I've tried\n a variety of slots and table games, and
                  the graphics and\n gameplay are really immersive."
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <img
                    src="/placeholder.svg"
                    alt="Customer Avatar"
                    width={40}
                    height={40}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-bold">Michael Johnson</h3>
                    <div className="flex items-center text-yellow-500">
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">
                  "The promotions and bonuses on Afri-Betting are really\n generous. I've been able to boost my winnings
                  thanks to the\n welcome offer and ongoing rewards."
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#002244] text-white py-6 px-6 md:px-10">
        <div className="container mx-auto flex items-center justify-between">
          <p>&copy; 2024 Afri-Betting. All rights reserved.</p>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#" className="hover:text-[#ffd700]" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-[#ffd700]" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-[#ffd700]" prefetch={false}>
              Help
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function ClubIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z" />
      <path d="M12 17.66L12 22" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}