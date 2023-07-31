import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import './index.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#ed9600',
    },
    secondary: {
      main: '#00ff0088',
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
