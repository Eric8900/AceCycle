import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ContactApp from './ContactApp'
import { Analytics } from "@vercel/analytics/react"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Analytics/>
    <ContactApp/>
  </React.StrictMode>,
)
