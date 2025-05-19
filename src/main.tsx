// External imports 
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Internal imports
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
