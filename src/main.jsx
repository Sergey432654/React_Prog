import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './assets/components/Router'
import Home from './assets/components/screens/home/Home' 
import './assets/styles/global.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
