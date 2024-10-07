"use client"

import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4 bg-black bg-opacity-50">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <Link href="/" className="text-2xl font-bold">
          Logo
        </Link>
        <ul className="flex space-x-4">
          <li><Link href="#" className="hover:text-blue-400 transition-colors">Home</Link></li>
          <li><Link href="#" className="hover:text-blue-400 transition-colors">About</Link></li>
          <li><Link href="#" className="hover:text-blue-400 transition-colors">Services</Link></li>
          <li><Link href="#" className="hover:text-blue-400 transition-colors">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}
