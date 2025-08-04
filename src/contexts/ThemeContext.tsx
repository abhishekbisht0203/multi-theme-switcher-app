"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export type ThemeType = "theme1" | "theme2" | "theme3"

interface ThemeContextType {
  currentTheme: ThemeType
  setTheme: (theme: ThemeType) => void
  isTransitioning: boolean
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>("theme1")
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    // Load theme from localStorage on mount
    const savedTheme = localStorage.getItem("app-theme") as ThemeType
    if (savedTheme && ["theme1", "theme2", "theme3"].includes(savedTheme)) {
      setCurrentTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    // Apply theme classes to document
    document.documentElement.className = ""
    document.documentElement.classList.add(currentTheme)

    // Load theme-specific fonts
    if (currentTheme === "theme3") {
      const link = document.createElement("link")
      link.href = "https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
      link.rel = "stylesheet"
      document.head.appendChild(link)
    }
  }, [currentTheme])

  const setTheme = (theme: ThemeType) => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentTheme(theme)
      localStorage.setItem("app-theme", theme)
      setTimeout(() => setIsTransitioning(false), 300)
    }, 150)
  }

  return <ThemeContext.Provider value={{ currentTheme, setTheme, isTransitioning }}>{children}</ThemeContext.Provider>
}
