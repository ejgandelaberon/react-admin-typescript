import React, { useContext, useState } from 'react'
import { ThemeType } from './ThemeType'

type Props = {
  children: JSX.Element
}

export const ThemeContext = React.createContext<ThemeType>({
  updateTheme: () => {},
  restoreDefault: () => {}
})

export const useTheme = () => useContext(ThemeContext)

const ThemeProvider = ({children}: Props) => {
  const [theme, setTheme] = useState('')

  const updateTheme = (theme: string) => {
    setTheme(currentTheme => {
      window.localStorage.setItem('theme', theme)
      return currentTheme = theme
    })
  }

  const restoreDefault = () => {
    setTheme(currentTheme => {
      window.localStorage.removeItem('theme')
      return currentTheme = ''
    })
  }
  

  const value = {
    theme,
    updateTheme,
    restoreDefault
  }
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider