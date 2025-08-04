"use client"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "@/contexts/ThemeContext"
import { ProductProvider } from "@/contexts/ProductContext"
import { FavoritesProvider } from "@/contexts/FavoritesContext"
import Header from "@/components/Header"
import Home from "@/pages/Home"
import About from "@/pages/About"
import Contact from "@/pages/Contact"
import { Toaster } from "@/components/UI/toaster"

export default function App() {
  return (
    <ThemeProvider>
      <ProductProvider>
        <FavoritesProvider>
          <Router>
            <div className="min-h-screen transition-all duration-500 ease-in-out">
              <Header />
              <main className="pt-16">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </main>
              <Toaster />
            </div>
          </Router>
        </FavoritesProvider>
      </ProductProvider>
    </ThemeProvider>
  )
}
