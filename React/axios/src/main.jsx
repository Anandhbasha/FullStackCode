import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UsePages from './UsePages.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UsePages />
  </StrictMode>,
)
