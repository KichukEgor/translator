import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeManager } from './context/ManageThemes/ManageThemes'
import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <ThemeManager>
    <App />
  </ThemeManager>
)
