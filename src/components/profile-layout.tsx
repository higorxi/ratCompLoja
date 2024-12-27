"use client"

import { useState } from "react"
import { UserCircle, Key, ShoppingBag, Settings } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Orders from "./orders"
import OtherSettings from "./other-settings"
import PasswordChange from "./password-change"
import ProfileData from "./profile-data"

const tabs = [
  { id: "profile", label: "Perfil", icon: UserCircle, component: ProfileData },
  { id: "password", label: "Senha", icon: Key, component: PasswordChange },
  { id: "orders", label: "Pedidos", icon: ShoppingBag, component: Orders },
  { id: "other", label: "Outros", icon: Settings, component: OtherSettings },
]

export default function ProfileLayout() {
  const [activeTab, setActiveTab] = useState("profile")

  return (
    <div className="flex bg-background rounded-lg shadow-lg overflow-hidden">
      <div className="w-64 bg-muted p-4">
        <nav className="space-y-2">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start",
                activeTab === tab.id && "bg-accent"
              )}
              onClick={() => setActiveTab(tab.id)}
            >
              <tab.icon className="mr-2 h-4 w-4" />
              {tab.label}
            </Button>
          ))}
        </nav>
      </div>
      <Separator orientation="vertical" />
      <div className="flex-1 p-6 max-h-[calc(100vh-150px)] overflow-y-auto">
        {tabs.find((tab) => tab.id === activeTab)?.component()}
      </div>
    </div>
  )
}

