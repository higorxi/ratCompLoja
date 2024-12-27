import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CheckCircle, CreditCard, MapPin, MessageCircle } from 'lucide-react'

const orders = [
  { 
    id: 1, 
    date: "2023-05-01", 
    total: "R$ 150,00", 
    status: "Entregue",
    items: [
      { name: "Camiseta Azul", quantity: 2, price: "R$ 75,00" },
    ],
    steps: [
      { label: "Pedido Aprovado", date: "2023-05-01", completed: true },
      { label: "Em Preparação", date: "2023-05-02", completed: true },
      { label: "Enviado", date: "2023-05-03", completed: true },
      { label: "Entregue", date: "2023-05-05", completed: true },
    ],
    payment: {
      method: "Cartão de Crédito",
      last4: "1234",
    },
    address: {
      street: "Rua das Flores, 123",
      city: "São Paulo",
      state: "SP",
      zipCode: "01234-567",
    },
  },
  { 
    id: 2, 
    date: "2023-05-15", 
    total: "R$ 200,00", 
    status: "Em trânsito",
    items: [
      { name: "Camiseta Vermelha", quantity: 1, price: "R$ 80,00" },
      { name: "Camiseta Preta", quantity: 1, price: "R$ 120,00" },
    ],
    steps: [
      { label: "Pedido Aprovado", date: "2023-05-15", completed: true },
      { label: "Em Preparação", date: "2023-05-16", completed: true },
      { label: "Enviado", date: "2023-05-17", completed: true },
      { label: "Entregue", date: null, completed: false },
    ],
    payment: {
      method: "Boleto",
      last4: null,
    },
    address: {
      street: "Av. Paulista, 1000",
      city: "São Paulo",
      state: "SP",
      zipCode: "01310-100",
    },
  },
  { 
    id: 3, 
    date: "2023-06-01", 
    total: "R$ 100,00", 
    status: "Processando",
    items: [
      { name: "Camiseta Branca", quantity: 1, price: "R$ 100,00" },
    ],
    steps: [
      { label: "Pedido Aprovado", date: "2023-06-01", completed: true },
      { label: "Em Preparação", date: null, completed: false },
      { label: "Enviado", date: null, completed: false },
      { label: "Entregue", date: null, completed: false },
    ],
    payment: {
      method: "PIX",
      last4: null,
    },
    address: {
      street: "Rua do Comércio, 500",
      city: "Rio de Janeiro",
      state: "RJ",
      zipCode: "20010-020",
    },
  },
]

function OrderDetails({ order }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Ver Detalhes</Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Detalhes do Pedido #{order.id}</DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[80vh]">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Status do Pedido</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  {order.steps.map((step, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className={`rounded-full p-2 ${step.completed ? 'bg-green-500' : 'bg-gray-300'}`}>
                        <CheckCircle className="h-6 w-6 text-white" />
                      </div>
                      <p className="text-xs mt-1">{step.label}</p>
                      <p className="text-xs text-muted-foreground">{step.date || '-'}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Itens do Pedido</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Produto</TableHead>
                      <TableHead>Quantidade</TableHead>
                      <TableHead>Preço</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {order.items.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.quantity}</TableCell>
                        <TableCell>{item.price}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <div className="mt-4 text-right font-bold">
                  Total: {order.total}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Pagamento
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Método: {order.payment.method}</p>
                  {order.payment.last4 && <p>Final do cartão: {order.payment.last4}</p>}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4" />
                    Endereço de Entrega
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{order.address.street}</p>
                  <p>{order.address.city}, {order.address.state}</p>
                  <p>{order.address.zipCode}</p>
                </CardContent>
              </Card>
            </div>

            <Button className="w-full" onClick={() => setIsDialogOpen(false)}>
              <MessageCircle className="mr-2 h-4 w-4" />
              Abrir Chat Sobre Este Pedido
            </Button>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}

export default function Orders() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Seus Pedidos</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nº do Pedido</TableHead>
              <TableHead>Data</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.total}</TableCell>
                <TableCell>
                  <Badge variant={
                    order.status === "Entregue" ? "success" : 
                    order.status === "Em trânsito" ? "warning" : 
                    "default"
                  }>
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <OrderDetails order={order} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

