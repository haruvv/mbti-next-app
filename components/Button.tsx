import Link from 'next/link'

interface ButtonProps {
  href: string
  children: React.ReactNode
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ href, children, onClick }) => {
  return (
    <Link
      href={href}
      className="inline-block bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-200 active:animate-button-press"
      onClick={e => {
        if (onClick) {
          e.preventDefault()
          onClick()
        }
      }}
    >
      {children}
    </Link>
  )
}

export default Button
