import { Inter } from 'next/font/google'
import './globals.css'
import Link from "next/link"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Flaming Hot',
  description: 'Your tongue will lash-out hot!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className }>
      <header className={"md:flex text-white justify-between p-4 bg-purple-500 border-b-8 border-amber-100"}>
          <h1>Logo</h1>
          <nav className={"gap-4 flex text-white"}>
              <Link href={"/"}>Home</Link>
              <Link href={"/recipies"}>Recipies</Link>
              <Link href={"/contact"}>Contact</Link>
          </nav>

          <h5>Sign In</h5>
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
