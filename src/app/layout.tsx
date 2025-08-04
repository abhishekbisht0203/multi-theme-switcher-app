import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/contexts/ThemeContext"
import { ProductProvider } from "@/contexts/ProductContext"
import { FavoritesProvider } from "@/contexts/FavoritesContext"
import Header from "@/components/Header"
import { Toaster } from "@/components/UI/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Multi-Theme Switcher App",
  description: "A React app with three distinct themes and advanced features",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
            <ThemeProvider>
      <ProductProvider>
        <FavoritesProvider>
          <div className="min-h-screen transition-all duration-500 ease-in-out">
            <Header />
            <main className="pt-16">
              {children}
            </main>
            <Toaster />
          </div>
        </FavoritesProvider>
      </ProductProvider>
    </ThemeProvider>
      </body>
    </html>
  )
}
