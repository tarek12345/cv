'use client'
import TopBar from '@/components/TopBar/TopBar'
import Image from 'next/image'
import Accueil from "./accueil/page"
export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
 <Accueil />
    </main>
  )
}
