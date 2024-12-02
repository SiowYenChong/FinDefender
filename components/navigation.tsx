'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isParentHovered, setIsParentHovered] = useState(false)
  const [isDropdownHovered, setIsDropdownHovered] = useState(false)

  // Handle showing the dropdown when hovering over the parent item
  const handleParentEnter = () => {
    setIsDropdownOpen(true)
    setIsParentHovered(true)
  }

  // Handle hiding the dropdown after both parent and dropdown are hovered out
  const handleParentLeave = () => {
    setTimeout(() => {
      if (!isDropdownHovered) {
        setIsDropdownOpen(false)
      }
    }, 300) // 300ms delay before hiding
    setIsParentHovered(false)
  }

  // Handle mouse enter/leave for the dropdown
  const handleDropdownEnter = () => {
    setIsDropdownHovered(true)
  }

  const handleDropdownLeave = () => {
    setTimeout(() => {
      if (!isParentHovered) {
        setIsDropdownOpen(false)
      }
    }, 300) // 300ms delay before hiding
    setIsDropdownHovered(false)
  }

  return (
    <nav className="p-4 bg-gray-100">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="text-blue-600 hover:underline">
            Home
          </Link>
        </li>
        <li
          className="relative"
          onMouseEnter={handleParentEnter}
          onMouseLeave={handleParentLeave}
        >
          <Link href="/create-transaction" className="text-blue-600 hover:underline">
            Make a Transaction
          </Link>
          {isDropdownOpen && (
            <ul
              className="absolute left-0 mt-2 bg-white shadow-lg border rounded-md w-40 z-50"
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
            >
              <li>
                <Link href="/create-transaction" className="block px-4 py-2 text-blue-600 hover:bg-gray-100">
                  Transaction
                </Link>
              </li>
              <li>
                <Link href="/bills" className="block px-4 py-2 text-blue-600 hover:bg-gray-100">
                  Bills
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link href="/transaction" className="text-blue-600 hover:underline">
            Transaction History
          </Link>
        </li>
      </ul>
    </nav>
  )
}
