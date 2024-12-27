"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UserCircle, Key, ShoppingBag, Truck, MessageCircle, Settings } from 'lucide-react'
import ProfileData from "./profile-data"
import Chat from "./chat"
import OrderStatus from "./order-status"
import Orders from "./orders"
import OtherSettings from "./other-settings"
import PasswordChange from "./password-change"

export default function ProfileTabs() {
  return (
    <Tabs defaultValue="profile" className="w-full">
      <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
        <TabsTrigger value="profile" className="flex items-center gap-2">
          <UserCircle className="h-4 w-4" />
          <span className="hidden sm:inline">Perfil</span>
        </TabsTrigger>
        <TabsTrigger value="password" className="flex items-center gap-2">
          <Key className="h-4 w-4" />
          <span className="hidden sm:inline">Senha</span>
        </TabsTrigger>
        <TabsTrigger value="orders" className="flex items-center gap-2">
          <ShoppingBag className="h-4 w-4" />
          <span className="hidden sm:inline">Pedidos</span>
        </TabsTrigger>
        <TabsTrigger value="status" className="flex items-center gap-2">
          <Truck className="h-4 w-4" />
          <span className="hidden sm:inline">Status</span>
        </TabsTrigger>
        <TabsTrigger value="chat" className="flex items-center gap-2">
          <MessageCircle className="h-4 w-4" />
          <span className="hidden sm:inline">Chat</span>
        </TabsTrigger>
        <TabsTrigger value="other" className="flex items-center gap-2">
          <Settings className="h-4 w-4" />
          <span className="hidden sm:inline">Outros</span>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="profile">
        <ProfileData />
      </TabsContent>
      <TabsContent value="password">
        <PasswordChange />
      </TabsContent>
      <TabsContent value="orders">
        <Orders />
      </TabsContent>
      <TabsContent value="status">
        <OrderStatus />
      </TabsContent>
      <TabsContent value="chat">
        <Chat />
      </TabsContent>
      <TabsContent value="other">
        <OtherSettings />
      </TabsContent>
    </Tabs>
  )
}

