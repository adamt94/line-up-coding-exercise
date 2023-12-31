import '../styles/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Line Up Coding Exercise',
  description: 'Generated by create next app',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="surface-container">
      <body className="">
        <header className="">
          <nav className="flex items-center justify-between primary-container on-primary-container-text py-4 px-6">
            <div className="text-2xl font-bold">Line Up</div>
            <div className="flex items-center">
              <div className="mr-4">Basket</div>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}
