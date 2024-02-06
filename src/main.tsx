import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme({
  typography: {
    h1: {
      fontSize: "2.5em"
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "0.125em",
          margin: "0.125em",
          width:"auto",
          maxHeight:"2em"
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
