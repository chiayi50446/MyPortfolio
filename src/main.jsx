// Name: Chiayi Lin
// StudentID: 301448962
// Date: 09.27.24
// File name: Main.jsx
// Section: COMP229 SEC 010

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './icons.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
