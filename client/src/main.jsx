import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// Add your CSS files here
import './styles/nav.css'
import './styles/home.css'
import './styles/footer.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)