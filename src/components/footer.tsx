import Link from 'next/link'
import { Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto flex flex-wrap justify-between px-6">
        {/* Seção sobre a empresa */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h3 className="text-2xl font-bold text-purple-400 mb-3">Rat Comp</h3>
          <p className="text-sm text-gray-400">Roupas e artigos esportivos tailandeses de alta qualidade para o atleta moderno e antenado na moda.</p>
        </div>

        {/* Links rápidos */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h4 className="text-lg font-semibold text-purple-300 mb-2">Links Rápidos</h4>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-purple-400 transition-colors">Início</Link></li>
            <li><Link href="/products" className="hover:text-purple-400 transition-colors">Produtos</Link></li>
            <li><Link href="/about" className="hover:text-purple-400 transition-colors">Sobre nós</Link></li>
            <li><Link href="/contact" className="hover:text-purple-400 transition-colors">Contato</Link></li>
          </ul>
        </div>

        {/* Redes sociais */}
        <div className="w-full md:w-1/3">
          <h4 className="text-lg font-semibold text-purple-300 mb-2">Siga-nos</h4>
          <div className="flex space-x-6">
            <a href="https://instagram.com/ratcomp" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
              <Instagram size={24} />
            </a>
            <a href="https://facebook.com/ratcomp" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
              <Facebook size={24} />
            </a>
            <a href="https://twitter.com/ratcomp" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Rodapé */}
      <div className="mt-8 text-center text-sm text-gray-400">
        <p>&copy; 2023 Rat Comp. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
