import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from './router/AppRouter'
// import './index.css'
// import App from './App.jsx'
import './normalize-fwd.css'
import './style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <AppRouter />
  </StrictMode>,
)
