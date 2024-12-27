"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useCart } from '@/context/CartContext'

interface Product {
  id: string
  name: string
  price: number
  image: string
  quantity: number
}

const products: Product[] = [
  { id: '1', name: 'Classic Thai Shirt', price: 29.99, image: '/placeholder.svg', quantity: 1 },
  { id: '2', name: 'Sport Performance Shirt', price: 34.99, image: '/placeholder.svg', quantity: 1 },
  { id: '3', name: 'Elephant Print Shirt', price: 39.99, image: '/placeholder.svg', quantity: 1 },
  { id: '4', name: 'Muay Thai Inspired Shirt', price: 32.99, image: '/placeholder.svg', quantity: 1 },
  { id: '5', name: 'Bangkok Nights Shirt', price: 36.99, image: '/placeholder.svg', quantity: 1 },
  { id: '6', name: 'Thai Temple Shirt', price: 38.99, image: '/placeholder.svg', quantity: 1 },
]

export default function ProductsPage() {
  const { addItem } = useCart();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Nossos Produtos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image src={product.image} alt={product.name} width={300} height={300} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">R${product.price.toFixed(2)}</p>
              <div className="flex space-x-2">
                <Button asChild className="flex-1">
                  <Link href={`/products/${product.id}`} className="w-full text-center block">Ver Detalhes</Link>
                </Button>
                <Button onClick={() => addItem(product)} variant="outline" className="flex-1">
                  Adicionar ao Carrinho
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
