import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'sonner'

export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> 
    <Toaster position='top-right' />
  </StrictMode>,
)
