import ProfileLayout from "@/components/profile-layout"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Perfil do Usuário",
  description: "Gerencie seu perfil, pedidos e configurações",
}

export default function ProfilePage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Seu Perfil</h1>
      <ProfileLayout />
    </div>
  )
}

