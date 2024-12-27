"use client"

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Instagram, MessageCircle, Truck, Clock, Ruler, Package } from 'lucide-react';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CartItem, useCart } from '@/context/CartContext';

const products = [
  { 
    id: 1, 
    name: 'Camisa Clássica Tailandesa', 
    price: 129.99, 
    image: '/placeholder.svg',
    gallery: [
      '/placeholder.svg',
      '/placeholder.svg',
      '/placeholder.svg',
      '/placeholder.svg'
    ],
    description: 'Uma camisa confortável e elegante feita de algodão tailandês premium.',
    specifications: {
      material: 'Algodão Tailandês Premium',
      cuidados: ['Lavar à mão', 'Não usar alvejante', 'Secar na sombra', 'Passar em temperatura média'],
      composicao: '100% Algodão',
      origem: 'Tailândia',
      indicacao: 'Casual e eventos',
      estilo: 'Tradicional tailandês'
    },
    medidas: {
      P: { comprimento: '70cm', largura: '50cm', manga: '22cm' },
      M: { comprimento: '72cm', largura: '52cm', manga: '23cm' },
      G: { comprimento: '74cm', largura: '54cm', manga: '24cm' },
      GG: { comprimento: '76cm', largura: '56cm', manga: '25cm' }
    },
    sizes: ['P', 'M', 'G', 'GG'], 
    colors: ['Branco', 'Preto', 'Roxo'], 
    category: 'casual',
    prazoProducao: '2-3 dias úteis',
    freteGratis: true,
    prazoEntrega: {
      capital: '3-5 dias úteis',
      interior: '5-7 dias úteis',
      remoto: 'até 10 dias úteis'
    }
  },
  { 
    id: 2, 
    name: 'Camisa Performance Esportiva', 
    price: 149.99, 
    image: '/placeholder.svg',
    gallery: [
      '/placeholder.svg',
      '/placeholder.svg',
      '/placeholder.svg',
      '/placeholder.svg'
    ],
    description: 'Projetada para atletas, esta camisa oferece respirabilidade superior.',
    specifications: {
      material: 'Poliéster de Alta Performance',
      cuidados: ['Lavar à máquina', 'Não usar alvejante', 'Secar na sombra', 'Não passar'],
      composicao: '90% Poliéster, 10% Elastano',
      origem: 'Tailândia',
      indicacao: 'Práticas esportivas',
      estilo: 'Esportivo moderno'
    },
    medidas: {
      P: { comprimento: '71cm', largura: '51cm', manga: '23cm' },
      M: { comprimento: '73cm', largura: '53cm', manga: '24cm' },
      G: { comprimento: '75cm', largura: '55cm', manga: '25cm' },
      GG: { comprimento: '77cm', largura: '57cm', manga: '26cm' }
    },
    sizes: ['P', 'M', 'G', 'GG'],
    colors: ['Azul', 'Preto', 'Vermelho'],
    category: 'esportiva',
    prazoProducao: '2-3 dias úteis',
    freteGratis: true,
    prazoEntrega: {
      capital: '3-5 dias úteis',
      interior: '5-7 dias úteis',
      remoto: 'até 10 dias úteis'
    }
  },
  { 
    id: 3, 
    name: 'Camisa Estampa de Elefante', 
    price: 159.99, 
    image: '/placeholder.svg',
    gallery: [
      '/placeholder.svg',
      '/placeholder.svg',
      '/placeholder.svg',
      '/placeholder.svg'
    ],
    description: 'Uma camisa única com uma bela estampa de elefante inspirada na cultura tailandesa.',
    specifications: {
      material: 'Algodão Estampado',
      cuidados: ['Lavar à mão', 'Não usar alvejante', 'Secar na sombra', 'Passar ao avesso'],
      composicao: '100% Algodão',
      origem: 'Tailândia',
      indicacao: 'Casual e eventos',
      estilo: 'Étnico tailandês'
    },
    medidas: {
      P: { comprimento: '70cm', largura: '50cm', manga: '22cm' },
      M: { comprimento: '72cm', largura: '52cm', manga: '23cm' },
      G: { comprimento: '74cm', largura: '54cm', manga: '24cm' },
      GG: { comprimento: '76cm', largura: '56cm', manga: '25cm' }
    },
    sizes: ['P', 'M', 'G', 'GG'],
    colors: ['Azul', 'Verde', 'Bege'],
    category: 'casual',
    prazoProducao: '2-3 dias úteis',
    freteGratis: true,
    prazoEntrega: {
      capital: '3-5 dias úteis',
      interior: '5-7 dias úteis',
      remoto: 'até 10 dias úteis'
    }
  }
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
  const { addItem } = useCart();
  const product = products.find(p => p.id === parseInt(id as string));
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');


  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  const addToCart = (product: CartItem) => {
    if (!selectedSize || !selectedColor) {
      alert('Por favor, selecione um tamanho e uma cor.');
      return;
    }
    addItem(product)
    alert('Produto adicionado ao carrinho!');
  };

  const whatsappMessage = encodeURIComponent(`Olá, estou interessado na ${product.name} (Tamanho: ${selectedSize || '[TAMANHO]'}, Cor: ${selectedColor || '[COR]'}) Pode me dar mais informações?`);
  const instagramMessage = encodeURIComponent(`Olá, estou interessado na ${product.name} (Tamanho: ${selectedSize || '[TAMANHO]'}, Cor: ${selectedColor || '[COR]'}) do seu site. Pode me ajudar com minha compra?`);

  const similarProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="space-y-4">
          <Image src={product.image} alt={product.name} width={500} height={500} className="rounded-lg shadow-lg" />
          <div className="grid grid-cols-4 gap-2">
            {[1, 2, 3, 4].map((i) => (
              <Image key={i} src={product.image} alt={`${product.name} vista ${i}`} width={100} height={100} className="rounded-lg cursor-pointer hover:opacity-75" />
            ))}
          </div>
        </div>
        
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-2xl font-semibold text-purple-600">R${product.price.toFixed(2)}</p>
          </div>

          <p className="text-gray-600">{product.description}</p>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Tamanhos:</h2>
            <div className="flex space-x-2">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-lg ${selectedSize === size ? 'bg-purple-600 text-white' : 'border-gray-300 hover:border-purple-600'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Cores:</h2>
            <div className="flex space-x-2">
              {product.colors.map(color => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-2 border rounded-lg ${selectedColor === color ? 'bg-purple-600 text-white' : 'border-gray-300 hover:border-purple-600'}`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 py-4">
            <div className="flex items-center space-x-2">
              <Truck className="text-purple-600" />
              <span>Entrega em 5-7 dias úteis</span>
            </div>
            <div className="flex items-center space-x-2">
              <Package className="text-purple-600" />
              <span>Frete grátis acima de R$200</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="text-purple-600" />
              <span>Produção em 2-3 dias</span>
            </div>
            <div className="flex items-center space-x-2">
              <Ruler className="text-purple-600" />
              <span>Tabela de medidas disponível</span>
            </div>
          </div>

          <div className="space-y-4">
            <Button onClick={() => addToCart(product)} className="w-full bg-purple-600 hover:bg-purple-700">
              Adicionar ao Carrinho
            </Button>
            <Button asChild className="w-full bg-green-600 hover:bg-green-700">
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

      <Tabs defaultValue="especificacoes" className="mt-8">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="especificacoes">Especificações</TabsTrigger>
          <TabsTrigger value="medidas">Guia de Medidas</TabsTrigger>
          <TabsTrigger value="entrega">Entrega e Devolução</TabsTrigger>
        </TabsList>

        <TabsContent value="especificacoes" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Especificações do Produto</h3>
              <ul className="space-y-2">
                <li><strong>Material:</strong> {product.specifications.material}</li>
                <li><strong>Composição:</strong> {product.specifications.composicao}</li>
                <li><strong>Origem:</strong> {product.specifications.origem}</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Instruções de Cuidado</h3>
              <ul className="space-y-2">
                {product.specifications.cuidados.map((cuidado, index) => (
                  <li key={index}>{cuidado}</li>
                ))}
              </ul>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="medidas" className="mt-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Tabela de Medidas (cm)</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-purple-50">
                    <th className="border p-2">Tamanho</th>
                    <th className="border p-2">Comprimento</th>
                    <th className="border p-2">Largura</th>
                    <th className="border p-2">Manga</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(product.medidas).map(([tamanho, medidas]) => (
                    <tr key={tamanho}>
                      <td className="border p-2 font-semibold">{tamanho}</td>
                      <td className="border p-2">{medidas.comprimento}</td>
                      <td className="border p-2">{medidas.largura}</td>
                      <td className="border p-2">{medidas.manga}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Alert>
              <AlertDescription>
                Para escolher o tamanho ideal, meça uma peça semelhante que você já possui e compare com as medidas acima.
              </AlertDescription>
            </Alert>
          </div>
        </TabsContent>

        <TabsContent value="entrega" className="mt-4">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Prazos de Entrega</h3>
              <p>Após a confirmação do pagamento, seu pedido será produzido em 2-3 dias úteis. O prazo de entrega varia de acordo com sua localização:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Capitais: 3-5 dias úteis</li>
                <li>Interior: 5-7 dias úteis</li>
                <li>Regiões remotas: até 10 dias úteis</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Política de Devolução</h3>
              <p>Você tem até 7 dias após o recebimento para solicitar a troca ou devolução do produto. O item deve estar:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Sem sinais de uso</li>
                <li>Com todas as etiquetas originais</li>
                <li>Na embalagem original</li>
              </ul>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Produtos Semelhantes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {similarProducts.map((similarProduct) => (
            <div key={similarProduct.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image src={similarProduct.image} alt={similarProduct.name} width={300} height={300} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{similarProduct.name}</h3>
                <p className="text-gray-600 mb-4">R${similarProduct.price.toFixed(2)}</p>
                <Link href={`/products/${similarProduct.id}`} className="text-purple-600 hover:text-purple-700">
                  Ver mais
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}