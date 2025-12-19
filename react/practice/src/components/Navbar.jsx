import React, { useContext } from 'react'
import { ThemeContext } from './UseContextDemo'

const Navbar = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <div style={{
        padding:"15px",
        background: theme === 'light' ? "#eee":"#333",
        color: theme === "light" ? "#000" : "#fff"
    }}>
        <h3>Navbar</h3>
        <p>Current Theme: {theme}</p>
        <button onClick={toggleTheme}>
            Change Theme
        </button>
    </div>
  )
}

export default Navbar