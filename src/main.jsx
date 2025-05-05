import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from "./components/main/App.jsx"
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.querySelector("#root"))

root.render(
  <StrictMode>
    <BrowserRouter basename="/SportForU/">
      <App />
    </BrowserRouter>
  </StrictMode>,
)
