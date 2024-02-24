import { Manrope } from 'next/font/google'
import './globals.css'
import Link from "next/link"

const inter = Manrope({ subsets: ['latin'], weight:["200","300","400"] })

export const metadata = {
  title: 'Flaming Hot',
  description: 'Your tongue will lash-out hot!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className }>
      <header className={"md:flex text-white justify-between p-4 bg-gradient-to-r from-amber-300 to-orange-500 border-b-8 border-red-400"}>
          <h1>Logo</h1>
          <nav className={"gap-4 flex text-white"}>
              <Link href={"/"}>Home</Link>
              <Link href={"/recipies"}>Recipies</Link>
              <Link href={"/contact"}>Contact</Link>
          </nav>

          <button className={"bg-gray-50 px-2 py-1 rounded text-black text-xs uppercase"}>Sign In</button>
      </header>
      <div className={"flex  justify-center items-center"}>
          <div className={"max-w-5/6"}>
              {children}
          </div>
      </div>
      </body>
    </html>
  )
}
