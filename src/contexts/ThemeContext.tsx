import React, { useEffect, useState } from 'react'
import { initializeDarkMode } from '../utils/theme'

interface ThemeContextType {
  isDark: boolean
  toggleTheme: () => void
}

export const ThemeContext = React.createContext<ThemeContextType>({
  isDark: true,
  toggleTheme: () => {},
})

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    initializeDarkMode()
    setIsDark(document.documentElement.classList.contains('dark'))
  }, [])

  const toggleTheme = () => {
    const newState = !isDark
    setIsDark(newState)
    if (newState) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = React.useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
