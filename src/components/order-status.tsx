import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const orderStatus = [
  { id: 1, number: "001", status: "Entregue", date: "2023-05-01" },
  { id: 2, number: "002", status: "Em trânsito", date: "2023-05-15" },
  { id: 3, number: "003", status: "Processando", date: "2023-06-01" },
]

export default function OrderStatus() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Status dos Pedidos</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {orderStatus.map((order) => (
            <Card key={order.id}>
              <CardHeader>
                <CardTitle className="text-lg">Pedido #{order.number}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span>Status: {order.status}</span>
                  <Badge variant={order.status === "Entregue" ? "success" : order.status === "Em trânsito" ? "warning" : "default"}>
                    {order.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-2">Atualizado em: {order.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

