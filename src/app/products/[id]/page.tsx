"use client"

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Instagram, MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

const products = [
  { id: 1, name: 'Camisa Clássica Tailandesa', price: 129.99, image: '/placeholder.svg', description: 'Uma camisa confortável e elegante feita de algodão tailandês premium.', sizes: ['P', 'M', 'G', 'GG'], colors: ['Branco', 'Preto', 'Roxo'], category: 'casual' },
  { id: 2, name: 'Camisa Performance Esportiva', price: 149.99, image: '/placeholder.svg', description: 'Projetada para atletas, esta camisa oferece respirabilidade superior e propriedades de absorção de umidade.', sizes: ['P', 'M', 'G', 'GG'], colors: ['Cinza', 'Preto', 'Azul'], category: 'esportiva' },
  { id: 3, name: 'Camisa Estampa de Elefante', price: 159.99, image: '/placeholder.svg', description: 'Uma camisa única com uma bela estampa de elefante inspirada na cultura tailandesa.', sizes: ['P', 'M', 'G', 'GG'], colors: ['Branco', 'Cinza', 'Azul Claro'], category: 'casual' },
  { id: 4, name: 'Camisa Inspirada no Muay Thai', price: 139.99, image: '/placeholder.svg', description: 'Uma camisa que homenageia a arte do Muay Thai, perfeita para fãs de luta.', sizes: ['P', 'M', 'G', 'GG'], colors: ['Vermelho', 'Preto', 'Azul Marinho'], category: 'esportiva' },
  { id: 5, name: 'Camisa Noites de Bangkok', price: 169.99, image: '/placeholder.svg', description: 'Capture a energia vibrante de Bangkok com este design de camisa chamativo.', sizes: ['P', 'M', 'G', 'GG'], colors: ['Preto', 'Roxo', 'Dourado'], category: 'casual' },
  { id: 6, name: 'Camisa Templo Tailandês', price: 179.99, image: '/placeholder.svg', description: 'Uma camisa com designs intrincados inspirados em belos templos tailandeses.', sizes: ['P', 'M', 'G', 'GG'], colors: ['Branco', 'Laranja', 'Verde'], category: 'casual' },
];

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  sizes: string[];
  colors: string[];
  category: string;
  quantity: number;
  size: string;
  color: string;
}


export default function ProductPage() {
  const { id } = useParams();

  const product = products.find(p => p.id === parseInt(id as string));

  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  const addToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Por favor, selecione um tamanho e uma cor.');
      return;
    }
    const updatedCart = [...cart, { ...product, quantity: 1, size: selectedSize, color: selectedColor }];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert('Produto adicionado ao carrinho!');
  };

  const whatsappMessage = encodeURIComponent(`Olá, estou interessado na ${product.name} (Tamanho: ${selectedSize || '[TAMANHO]'}, Cor: ${selectedColor || '[COR]'}) Pode me dar mais informações?`);
  const instagramMessage = encodeURIComponent(`Olá, estou interessado na ${product.name} (Tamanho: ${selectedSize || '[TAMANHO]'}, Cor: ${selectedColor || '[COR]'}) do seu site. Pode me ajudar com minha compra?`);

  const similarProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div>
          <Image src={product.image} alt={product.name} width={500} height={500} className="rounded-lg shadow-lg" />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl font-semibold mb-4">R${product.price.toFixed(2)}</p>
          <p className="mb-4">{product.description}</p>
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Tamanhos:</h2>
            <div className="flex space-x-2">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1 border rounded ${selectedSize === size ? 'bg-purple-600 text-white' : 'border-gray-300'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Cores:</h2>
            <div className="flex space-x-2">
              {product.colors.map(color => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-3 py-1 border rounded ${selectedColor === color ? 'bg-purple-600 text-white' : 'border-gray-300'}`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <Button onClick={addToCart} className="w-full">
              Adicionar ao Carrinho
            </Button>
            <Button asChild className="w-full">
              <Link href={`https://wa.me/62985194415?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2" /> Contato via WhatsApp
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full">
              <Link href={`https://www.instagram.com/direct/t/higor_m.t?text=${instagramMessage}`} target="_blank" rel="noopener noreferrer">
                <Instagram className="mr-2" /> Contato via Instagram DM
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Produtos Semelhantes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {similarProducts.map((similarProduct) => (
            <div key={similarProduct.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image src={similarProduct.image} alt={similarProduct.name} width={300} height={300} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{similarProduct.name}</h3>
                <p className="text-gray-600 mb-4">R${similarProduct.price.toFixed(2)}</p>
                <Link href={`/products/${similarProduct.id}`} className="text-purple-600">Ver mais</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
