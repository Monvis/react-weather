import React, { useState, useContext } from 'react'
import { ChangeCssRootVariables } from '../model/ChangeCssRootVariables'

const ThemeContext = React.createContext({
  theme: 'light',
  toggleTheme: () => {}
});

export const ThemeProvider = (({children}) => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(theme === 'light'? 'dark' : 'light')
    ChangeCssRootVariables(theme)
  }

  const value = {
    theme,
    toggleTheme
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
})

export const useTheme = () => {
  return useContext(ThemeContext)
}
