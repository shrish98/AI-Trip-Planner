import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const menuOptions = [
  { name: 'Home', path: '/' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Contact us', path: '/contact-us' },
]

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between px-6 py-4 shadow-sm bg-white">
      {/* Logo Section */}
      <div className="flex w-1/3 items-center gap-2">
        <Image src="/logo.svg" alt="AI Trip Planner logo" width={30} height={30} />
        <h2 className="text-xl font-bold text-black">AI Trip Planner</h2>
      </div>

      {/* Navigation Section */}
      <nav className="flex w-1/3 items-center justify-center gap-8">
        {menuOptions.map((menu) => (
          <Link
            key={menu.path}
            href={menu.path}
            className="text-sm font-semibold hover:text-[#f56551] text-gray-800 transition-colors"
          >
            {menu.name}
          </Link>
        ))}
      </nav>

      {/* Action Section */}
      <div className="flex w-1/3 items-center justify-end">
        <button className="rounded-lg bg-[#f56551] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-red-500">
          Get Started
        </button>
      </div>
    </header>
  )
}