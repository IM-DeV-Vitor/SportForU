import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./components/main/App.jsx"
import Login from './components/login/login.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
  </StrictMode>,
)
