/* Utility function to toggle dark mode */
export const toggleDarkMode = (): boolean => {
  const html = document.documentElement
  const isDark = html.classList.contains('dark')

  if (isDark) {
    html.classList.remove('dark')
    localStorage.setItem('theme', 'light')
    return false
  } else {
    html.classList.add('dark')
    localStorage.setItem('theme', 'dark')
    return true
  }
}

/* Initialize dark mode from localStorage */
export const initializeDarkMode = (): void => {
  const theme = localStorage.getItem('theme')
  const html = document.documentElement

  if (theme === 'light') {
    html.classList.remove('dark')
  } else {
    // Default to dark
    html.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  }
}
