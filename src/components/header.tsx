import Link from 'next/link'
import { ShoppingBag } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-purple-700 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold flex items-center">
          <span className="mr-2">🐀</span> Rat Comp
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link href="/products" className="hover:text-gray-300">Products</Link></li>
            <li><Link href="/cart" className="hover:text-gray-300"><ShoppingBag /></Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

