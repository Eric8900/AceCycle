import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import IssueApp from './IssueApp'
import { Analytics } from "@vercel/analytics/react"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Analytics/>
    <IssueApp/>
  </React.StrictMode>,
)