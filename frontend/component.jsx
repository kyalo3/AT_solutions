/**
 * v0 by Vercel.
 * @see https://v0.dev/t/hwGBC8vNDwe
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function Component() {
  const [showSignInForm, setShowSignInForm] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState("")
  const handleSignIn = () => {
    setShowSignInForm(true)
  }
  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch("YOUR_API_URL", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber }),
      })
      if (response.ok) {
        console.log("Phone number verified")
      } else {
        console.error("Error verifying phone number")
      }
    } catch (error) {
      console.error("Error making API request:", error)
    }
  }
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-[#003366] text-white py-4 px-6 flex items-center justify-between">
        <Link href="#" className="text-2xl font-bold" prefetch={false}>
          Afri-betting
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="#" className="hover:underline" prefetch={false}>
            Betting
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Profile
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Admin
          </Link>
          <Button
            variant="secondary"
            size="sm"
            className="bg-[#00264d] text-white hover:bg-[#001a33]"
            onClick={handleSignIn}
          >
            Sign In
          </Button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="bg-[#F3F4F6] py-12 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <div>
              <h1 className="text-4xl font-bold mb-4 text-[#1F2937]">Welcome to Afri-betting</h1>
              <p className="text-[#6B7280] mb-8">
                Afri-betting is your one-stop destination for all your betting needs. Explore a wide range of sports,
                esports, and other exciting markets, and place your bets with ease.
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-[#003366] hover:text-[#00264d]"
                prefetch={false}
              >
                <span>Start Betting</span>
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#1F2937]">Upcoming Events</h2>
              <ul className="space-y-4">
                <li>
                  <h3 className="font-semibold text-[#1F2937]">Premier League</h3>
                  <p className="text-[#6B7280]">Manchester United vs. Chelsea - July 25, 2024</p>
                </li>
                <li>
                  <h3 className="font-semibold text-[#1F2937]">League of Legends</h3>
                  <p className="text-[#6B7280]">TSM vs. Cloud9 - August 1, 2024</p>
                </li>
                <li>
                  <h3 className="font-semibold text-[#1F2937]">NBA Finals</h3>
                  <p className="text-[#6B7280]">Golden State Warriors vs. Boston Celtics - June 1, 2024</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="py-12 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-[#1F2937]">Popular Bets</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-[#F9FAFB] text-[#1F2937] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>Premier League</CardTitle>
                  <CardDescription>Manchester United vs. Chelsea</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>Manchester United</div>
                    <div className="font-bold text-[#003366]">2.5</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>Draw</div>
                    <div className="font-bold text-[#003366]">3.0</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>Chelsea</div>
                    <div className="font-bold text-[#003366]">2.8</div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#003366] text-white hover:bg-[#00264d] rounded-b-lg">Place Bet</Button>
                </CardFooter>
              </Card>
              <Card className="bg-[#F9FAFB] text-[#1F2937] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>League of Legends</CardTitle>
                  <CardDescription>TSM vs. Cloud9</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>TSM</div>
                    <div className="font-bold text-[#003366]">1.8</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>Cloud9</div>
                    <div className="font-bold text-[#003366]">2.2</div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#003366] text-white hover:bg-[#00264d] rounded-b-lg">Place Bet</Button>
                </CardFooter>
              </Card>
              <Card className="bg-[#F9FAFB] text-[#1F2937] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>NBA Finals</CardTitle>
                  <CardDescription>Golden State Warriors vs. Boston Celtics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>Golden State Warriors</div>
                    <div className="font-bold text-[#003366]">1.9</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>Boston Celtics</div>
                    <div className="font-bold text-[#003366]">2.1</div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#003366] text-white hover:bg-[#00264d] rounded-b-lg">Place Bet</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        {showSignInForm && (
          <section className="bg-[#F3F4F6] py-12 px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold mb-4 text-[#1F2937]">Sign In</h2>
              <Card className="bg-[#F9FAFB] text-[#1F2937] rounded-lg shadow-lg">
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Enter your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="age">Age</Label>
                      <Input id="age" type="number" placeholder="Enter your age" min="18" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="flex items-center">
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                      />
                      <Button className="ml-2 bg-[#003366] text-white hover:bg-[#00264d]" onClick={handleSubmit}>
                        Verify
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#003366] text-white hover:bg-[#00264d] rounded-b-lg">Sign In</Button>
                </CardFooter>
              </Card>
            </div>
          </section>
        )}
      </main>
      <footer className="bg-[#F3F4F6] text-[#6B7280] py-6 px-6 flex items-center justify-between">
        <div>&copy; 2024 Afri-betting. All rights reserved.</div>
        <nav className="flex items-center gap-4">
          <Link href="#" className="hover:underline" prefetch={false}>
            About
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Contact
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function ArrowRightIcon(props) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
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
