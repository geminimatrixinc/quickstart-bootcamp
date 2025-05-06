import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'


import './index.css'

// reactDOm.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
