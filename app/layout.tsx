import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts'
export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased`}>
        {children}
        <footer className="text-center">
          Hecho con &hearts; por la gente de Vercel
        </footer>
      </body>
    </html>
  )
}

