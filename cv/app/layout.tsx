import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import TopBar from '@/components/TopBar/TopBar'
import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.css';
import Footer from '@/components/Footer/Footer'
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
      <body className={roboto.className}><TopBar /> {children}   <Footer />
      <script src="https://cdn.sendgrid.com/pgp-button/main-4.11.0/pgp-button.js"></script>

      </body>
    </html>
  )
}