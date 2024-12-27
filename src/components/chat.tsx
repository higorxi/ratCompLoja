import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const generalChat = [
  { sender: "bot", message: "Olá! Como posso ajudar você hoje?" },
  { sender: "user", message: "Oi! Estou com uma dúvida geral sobre a loja." },
]

const productChats = {
  1: [
    { sender: "user", message: "Olá, gostaria de saber sobre o prazo de entrega da Camiseta Azul." },
    { sender: "bot", message: "Claro! O prazo de entrega para a Camiseta Azul é de 3 a 5 dias úteis." },
  ],
  2: [
    { sender: "user", message: "A Camiseta Vermelha está disponível em outros tamanhos?" },
    { sender: "bot", message: "Sim, a Camiseta Vermelha está disponível nos tamanhos P, M, G e GG." },
  ],
}

export default function Chat() {
  const [activeChat, setActiveChat] = useState("general")
  const [message, setMessage] = useState("")

  const handleSendMessage = (e) => {
    e.preventDefault()
    // Aqui você implementaria a lógica para enviar a mensagem
    console.log("Mensagem enviada:", message)
    setMessage("")
  }

  return (
    <Card className="h-[calc(100vh-200px)]">
      <CardHeader>
        <CardTitle>Chat de Suporte</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs value={activeChat} onValueChange={setActiveChat} className="h-full">
          <TabsList className="w-full justify-start rounded-none border-b">
            <TabsTrigger value="general">Geral</TabsTrigger>
            <TabsTrigger value="1">Pedido #1</TabsTrigger>
            <TabsTrigger value="2">Pedido #2</TabsTrigger>
          </TabsList>
          <TabsContent value="general" className="h-full flex flex-col">
            <ScrollArea className="flex-grow pr-4">
              <div className="space-y-4 p-4">
                {generalChat.map((msg, index) => (
                  <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`rounded-lg p-3 max-w-[80%] ${msg.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                      <p className="text-sm">{msg.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
          {Object.entries(productChats).map(([productId, chat]) => (
            <TabsContent key={productId} value={productId} className="h-full flex flex-col">
              <ScrollArea className="flex-grow pr-4">
                <div className="space-y-4 p-4">
                  {chat.map((msg, index) => (
                    <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`rounded-lg p-3 max-w-[80%] ${msg.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                        <p className="text-sm">{msg.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
      <CardFooter>
        <form onSubmit={handleSendMessage} className="flex w-full gap-2">
          <Input
            className="flex-1"
            placeholder="Digite sua mensagem..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button type="submit">Enviar</Button>
        </form>
      </CardFooter>
    </Card>
  )
}

