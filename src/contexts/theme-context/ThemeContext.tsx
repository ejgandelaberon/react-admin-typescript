import React, { useContext, useState } from 'react'
import { ThemeType } from './ThemeType'

type Props = {
  children: JSX.Element
}

export const ThemeContext = React.createContext<ThemeType>({
  theme: 'theme-dark-orange'
})

export const useTheme = () => useContext(ThemeContext)

const ThemeProvider = ({children}: Props) => {
  const [theme, setTheme] = useState('')

  const defaultTheme = () => {
    setTheme('theme-dark-orange')
    return theme
  }

  const redTheme = () => {
    setTheme('theme-red')
    return theme
  }

  const emeraldTheme = () => {
    setTheme('theme-emerald')
    return theme
  }

  const value = {
    theme,
    defaultTheme,
    redTheme,
    emeraldTheme
  }
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider