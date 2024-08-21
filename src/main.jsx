import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Terms from './Pages/terms.jsx'
import Privacy from './Pages/Privacy.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path ="/" element={ <App />}></Route>
      <Route path ="/terms-conditions" element={<Terms/>}></Route>
      <Route path="/privacy-policy" element={<Privacy/>}></Route>
      </Routes>
    </BrowserRouter>
   
  </StrictMode>,
)
