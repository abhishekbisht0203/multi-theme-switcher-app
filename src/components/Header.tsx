"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "@/contexts/ThemeContext"
import { ChevronDown, Menu, X, Palette, Search } from "lucide-react"
import { useProducts } from "@/contexts/ProductContext"

const Header = () => {
  const { currentTheme, setTheme } = useTheme()
  const { searchTerm, setSearchTerm } = useProducts()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = usePathname()

  const themes = [
    { id: "theme1", name: "Minimalist", description: "Clean & Simple" },
    { id: "theme2", name: "Professional", description: "Dark & Bold" },
    { id: "theme3", name: "Playful", description: "Colorful & Fun" },
  ]

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2">
              <Palette className="h-8 w-8 text-white animate-pulse" />
              <span className="text-xl font-bold text-white" style={{ fontFamily: "Pacifico, cursive" }}>
                ThemeApp Fun
              </span>
            </Link>
            <nav className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`text-sm font-bold transition-all transform hover:scale-105 ${
                    location === item.path
                      ? "text-yellow-300 drop-shadow-lg"
                      : "text-white hover:text-yellow-300"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            {location === "/" && (
              <div className="hidden sm:block relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-white/90 backdrop-blur-sm border-2 border-white/50 rounded-full text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300"
                />
              </div>
            )}

            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-full hover:bg-white/30 transition-all transform hover:scale-105 text-white"
              >
                <span className="text-sm font-bold">{themes.find((t) => t.id === currentTheme)?.name}</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-white/50 py-2">
                  {themes.map((theme) => (
                    <button
                      key={theme.id}
                      onClick={() => {
                        setTheme(theme.id as any)
                        setIsDropdownOpen(false)
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gradient-to-r hover:from-pink-100 hover:to-purple-100 transition-all transform hover:scale-105 rounded-xl mx-1"
                    >
                      <div className="font-bold text-sm text-gray-800">{theme.name}</div>
                      <div className="text-xs text-gray-600">{theme.description}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-white/20 text-white transition-all transform hover:scale-105"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-gradient-to-b from-pink-500 to-purple-500 shadow-lg border-t border-white/20">
          <div className="px-4 py-2 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-lg transition-colors ${
                  location === item.path
                    ? "bg-white/20 text-yellow-300"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </Link>
            ))}
            {location === "/" && (
              <div className="px-3 py-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-white/90 border-white/50 border-2 rounded-full"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
