import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme({
  typography: {
    h1: {
      fontSize: "2.2em"
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          margin: "0.125em",
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          pointerEvents: "none",
        }
      }
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
