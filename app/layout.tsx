import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import TopBar from '@/components/TopBar/TopBar'
import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.css';
const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

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
      <body className={roboto.className}><TopBar />{children}</body>
    </html>
  )
}