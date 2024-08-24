import React from 'react'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          MBTI診断
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:underline">
                ホーム
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                MBTIについて
              </Link>
            </li>
            <li>
              <Link href="/test" className="hover:underline">
                診断テスト
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
