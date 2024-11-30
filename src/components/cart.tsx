'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ShoppingBag, X, Plus, Minus, Trash2 } from 'lucide-react'
import Image from 'next/image'

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

export function Cart() {
  const [isOpen, setIsOpen] = useState(false)
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      setCartItems(JSON.parse(savedCart))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems))
  }, [cartItems])

  const toggleCart = () => setIsOpen(!isOpen)

  const updateQuantity = (id: number, change: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + change) }
          : item
      ).filter(item => item.quantity > 0)
    )
  }

  const removeFromCart = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const sendToWhatsApp = () => {
    const message = cartItems.map(item => 
      `${item.name} - Quantidade: ${item.quantity} - Preço: R$${item.price.toFixed(2)}`
    ).join('\n')
    const total = `Total: R$${getTotalPrice().toFixed(2)}`
    const whatsappMessage = encodeURIComponent(`Olá, gostaria de fazer o seguinte pedido:\n\n${message}\n\n${total}`)
    window.open(`https://wa.me/SEU_NUMERO_AQUI?text=${whatsappMessage}`, '_blank')
  }

  return (
    <>
      <button onClick={toggleCart} className="fixed right-4 bottom-4 bg-purple-600 text-white p-3 rounded-full shadow-lg z-50">
        <ShoppingBag />
        {cartItems.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
            {cartItems.length}
          </span>
        )}
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-lg p-6 overflow-y-auto">
            <button onClick={toggleCart} className="absolute top-4 right-4">
              <X />
            </button>
            <h2 className="text-2xl font-bold mb-4">Seu Carrinho</h2>
            {cartItems.length === 0 ? (
              <p>Seu carrinho está vazio.</p>
            ) : (
              <>
                {cartItems.map(item => (
                  <div key={item.id} className="flex items-center mb-4 bg-gray-100 p-4 rounded-lg">
                    <Image src={item.image} alt={item.name} width={80} height={80} className="rounded-md mr-4" />
                    <div className="flex-grow">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-gray-600">R${item.price.toFixed(2)}</p>
                      <div className="flex items-center mt-2">
                        <button onClick={() => updateQuantity(item.id, -1)} className="text-gray-500 hover:text-gray-700">
                          <Minus size={20} />
                        </button>
                        <span className="mx-2">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="text-gray-500 hover:text-gray-700">
                          <Plus size={20} />
                        </button>
                      </div>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">
                      <Trash2 size={20} />
                    </button>
                  </div>
                ))}
                <div className="mt-4 bg-gray-100 p-4 rounded-lg">
                  <h3 className="font-semibold text-xl mb-2">Total: R${getTotalPrice().toFixed(2)}</h3>
                </div>
                <div className="mt-6">
                  <h3 className="font-semibold mb-2">Calcular Frete</h3>
                  <div className="flex">
                    <input type="text" placeholder="Digite seu CEP" className="border p-2 flex-grow mr-2" />
                    <Button>Calcular</Button>
                  </div>
                </div>
                <Button onClick={sendToWhatsApp} className="w-full mt-6">Finalizar Pedido via WhatsApp</Button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}

