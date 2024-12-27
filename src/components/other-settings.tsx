import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function OtherSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Outras Configurações</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between space-x-2">
          <Label htmlFor="marketing-emails" className="flex flex-col space-y-1">
            <span>Receber e-mails de marketing</span>
            <span className="font-normal text-sm text-muted-foreground">Fique por dentro das nossas promoções</span>
          </Label>
          <Switch id="marketing-emails" />
        </div>
        <div className="flex items-center justify-between space-x-2">
          <Label htmlFor="order-updates" className="flex flex-col space-y-1">
            <span>Notificações de atualização de pedidos</span>
            <span className="font-normal text-sm text-muted-foreground">Receba atualizações sobre seus pedidos</span>
          </Label>
          <Switch id="order-updates" />
        </div>
        <div className="flex items-center justify-between space-x-2">
          <Label htmlFor="new-products" className="flex flex-col space-y-1">
            <span>Alertas de novos produtos</span>
            <span className="font-normal text-sm text-muted-foreground">Seja o primeiro a saber sobre novos lançamentos</span>
          </Label>
          <Switch id="new-products" />
        </div>
      </CardContent>
    </Card>
  )
}

