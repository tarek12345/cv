import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import TopBar from '@/components/TopBar/TopBar'
import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.css';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cv tarek',
  description: 'Trouvez tous  les  informations du mon cariére',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}><TopBar />{children}</body>
    </html>
  )
}
