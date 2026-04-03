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
    <header className="flex w-full items-center justify-between px-6 py-4 shadow-sm">
      {/* Logo Section */}
      <div className="flex w-1/3 items-center gap-2">
        <Image src="/logo.svg" alt="AtlasGo logo" width={30} height={30} />
        <h2 className="text-xl font-bold">AtlasGo</h2>
      </div>

      {/* Navigation Section */}
      <nav className="flex w-1/3 items-center justify-center gap-8">
        {menuOptions.map((menu) => (
          <Link
            key={menu.path}
            href={menu.path}
            className="text-sm font-medium hover:underline text-gray-700"
          >
            {menu.name}
          </Link>
        ))}
      </nav>

      {/* Action Section */}
      <div className="flex w-1/3 items-center justify-end">
        <button className="rounded-lg bg-black px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-800">
          Get Started
        </button>
      </div>
    </header>
  )
}