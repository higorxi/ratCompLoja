import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Marquee from "react-fast-marquee";

const championships = [
  { name: "Campeonato Brasileiro", logo: "/campeonato-brasileiro-logo.svg" },
  { name: "Copa Libertadores", logo: "/libertadores-logo.svg" },
  { name: "Premier League", logo: "/premier-league-logo.svg" },
  { name: "La Liga", logo: "/la-liga-logo.svg" },
  { name: "Bundesliga", logo: "/bundesliga-logo.svg" },
  { name: "Serie A", logo: "/serie-a-logo.svg" },
  { name: "Ligue 1", logo: "/ligue-1-logo.svg" },
  { name: "Champions League", logo: "/champions-league-logo.svg" },
];

export default function Home() {
  return (
    <div>
      {/* Seção Hero com múltiplas imagens no fundo */}
      <section className="relative bg-cover bg-center text-white py-32" 
        style={{ 
          backgroundImage: 'url(/promo1.jpg), url(/promo2.jpg), url(/promo3.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Bem-vindo à Rat Comp
          </h1>
          <p className="text-xl mb-8">
            Descubra a perfeita combinação de estilo e conforto com nossas camisas tailandesas e artigos esportivos
          </p>
          <Button asChild size="lg" className="transition-all duration-300 transform hover:scale-105">
            <Link href="/products">Compre Agora</Link>
          </Button>
        </div>
      </section>

      {/* Seção de Produtos em Destaque */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Nossos Produtos em Destaque
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/placeholder.svg"
                alt="Camisa Clássica"
                width={300}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  Camisa Clássica Tailandesa
                </h3>
                <p className="text-gray-600 mb-4">
                  Conforto e estilo em um só lugar
                </p>
                <Button asChild>
                  <Link href="/products/1">Ver Detalhes</Link>
                </Button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/placeholder.svg"
                alt="Camisa Esportiva"
                width={300}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  Camisa Performance Esportiva
                </h3>
                <p className="text-gray-600 mb-4">
                  Projetada para o máximo desempenho
                </p>
                <Button asChild>
                  <Link href="/products/2">Ver Detalhes</Link>
                </Button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/placeholder.svg"
                alt="Camisa Estampada"
                width={300}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  Camisa Estampa de Elefante
                </h3>
                <p className="text-gray-600 mb-4">
                  Arte tailandesa em cada detalhe
                </p>
                <Button asChild>
                  <Link href="/products/3">Ver Detalhes</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-800 text-white">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold">Ligas Que Cobrimos</h2>
        </div>
        <div className="w-full overflow-hidden">
          <Marquee gradient={false} className="w-full">
            <div className="flex space-x-16">
              {championships.map((championship, index) => (
                <div key={index} className="text-center">
                  <Image
                    src={championship.logo}
                    alt={championship.name}
                    width={100}
                    height={100}
                    className="mx-auto"
                  />
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">Atenção Revendedores!</h2>
          <p className="text-xl mb-8">
            Está procurando camisas de qualidade para revenda? A Rat Comp
            oferece condições especiais para compras em atacado.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contato-atacado">Entre em Contato</Link>
          </Button>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Por que Escolher a Rat Comp?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white border rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl h-full flex flex-col justify-between">
              <div className="mb-4">
                <img
                  src="/path-to-icon/quality-icon.png"
                  alt="Materiais de Qualidade"
                  className="mx-auto mb-4 w-16 h-16"
                />
                <h3 className="text-xl font-semibold mb-2">
                  Materiais de Qualidade
                </h3>
              </div>
              <p className="text-gray-600">
                Nossas camisas são feitas com o melhor algodão tailandês,
                garantindo conforto e durabilidade.
              </p>
            </div>

            <div className="text-center p-6 bg-white border rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl h-full flex flex-col justify-between">
              <div className="mb-4">
                <img
                  src="/path-to-icon/design-icon.png"
                  alt="Designs Exclusivos"
                  className="mx-auto mb-4 w-16 h-16"
                />
                <h3 className="text-xl font-semibold mb-2">
                  Designs Exclusivos
                </h3>
              </div>
              <p className="text-gray-600">
                Destaque-se com nossos padrões e estilos exclusivos inspirados
                na cultura tailandesa e no futebol mundial.
              </p>
            </div>

            <div className="text-center p-6 bg-white border rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl h-full flex flex-col justify-between">
              <div className="mb-4">
                <img
                  src="/path-to-icon/athletes-icon.png"
                  alt="Aprovado por Atletas"
                  className="mx-auto mb-4 w-16 h-16"
                />
                <h3 className="text-xl font-semibold mb-2">
                  Aprovado por Atletas
                </h3>
              </div>
              <p className="text-gray-600">
                Testado e aprovado por atletas para máximo desempenho e
                conforto, seja no campo ou nas ruas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-purple-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Oferta por Tempo Limitado
          </h2>
          <p className="text-xl mb-8">
            Ganhe 10% de desconto na sua primeira compra! Não perca essa
            oportunidade.
          </p>
          <Button asChild size="lg">
            <Link href="/desconto">Aproveitar Desconto</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
