"use client";

import { Button } from '@/components/ui/button';
import { ShoppingBag, X, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';

export function Cart() {
  const { isCartOpen, toggleCart, items, removeItem } = useCart();

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.price, 0);
  };

  const sendToWhatsApp = () => {
    const message = items.map(item => 
      `${item.name} - Preço: R$${item.price.toFixed(2)}`
    ).join('\n');
    const total = `Total: R$${getTotalPrice().toFixed(2)}`;
    const whatsappMessage = encodeURIComponent(`Olá, gostaria de fazer o seguinte pedido:\n\n${message}\n\n${total}`);
    window.open(`https://wa.me/SEU_NUMERO_AQUI?text=${whatsappMessage}`, '_blank');
  };

  return (
    <>
      <button onClick={toggleCart} className="fixed right-4 bottom-4 bg-purple-600 text-white p-3 rounded-full shadow-lg z-50">
        <ShoppingBag />
        {items.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
            {items.length}
          </span>
        )}
      </button>
      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-lg p-6 overflow-y-auto">
            <button onClick={toggleCart} className="absolute top-4 right-4">
              <X />
            </button>
            <h2 className="text-2xl font-bold mb-4">Seu Carrinho</h2>
            {items.length === 0 ? (
              <p>Seu carrinho está vazio.</p>
            ) : (
              <>
                {items.map((item, index) => (
                  <div key={index} className="flex items-center mb-4 bg-gray-100 p-4 rounded-lg">
                    <Image src={item.image} alt={item.name} width={80} height={80} className="rounded-md mr-4" />
                    <div className="flex-grow">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-gray-600">R${item.price.toFixed(2)}</p>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700">
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
  );
}
