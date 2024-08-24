'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { logout } from '../lib/auth'

export default function Navbar() {
  const pathname = usePathname()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem('token'))
  }, [])

  const handleLogout = () => {
    logout()
    setIsLoggedIn(false)
  }

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="font-serif text-xl font-bold text-gray-900">
            MBTI診断
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className={`${pathname === '/' ? 'text-gray-900 font-semibold' : 'text-gray-500'} hover:text-gray-900 transition-colors duration-200`}
            >
              ホーム
            </Link>
            <Link
              href="/test"
              className={`${pathname === '/test' ? 'text-gray-900 font-semibold' : 'text-gray-500'} hover:text-gray-900 transition-colors duration-200`}
            >
              診断テスト
            </Link>
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="text-gray-500 hover:text-gray-900 transition-colors duration-200"
              >
                ログアウト
              </button>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-gray-500 hover:text-gray-900 transition-colors duration-200"
                >
                  ログイン
                </Link>
                <Link
                  href="/register"
                  className="text-gray-500 hover:text-gray-900 transition-colors duration-200"
                >
                  登録
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
