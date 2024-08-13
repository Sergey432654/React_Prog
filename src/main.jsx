import React from 'react'
import ReactDOM from 'react-dom/client'
import AuchProvider from './assets/components/providers/AuchProvider'
import Router from './assets/components/Router'
import Home from './assets/components/screens/home/Home' 
import './assets/styles/global.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuchProvider>
    <Router />
    </AuchProvider>
  </React.StrictMode>,
)
