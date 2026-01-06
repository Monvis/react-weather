import React, { useState, useContext } from 'react'
import { ChangeCssRootVariables } from '../model/ChangeCssRootVariables'
import { storage } from '../model/Storage';

interface Props {
  children: React.ReactNode;
}

const ThemeContext = React.createContext({
  theme: 'light',
  toggleTheme: () => {}
});

export const ThemeProvider = (({children}: Props) => {
  const [theme, setTheme] = useState(() => {
    return storage.getItem('theme') || 'light'
  })

  ChangeCssRootVariables(theme)

  const toggleTheme = () => {
    const newTheme = theme === 'light'? 'dark' : 'light'
    setTheme(newTheme)
    storage.setItem('theme', newTheme)
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