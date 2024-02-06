import { Box, Container, Typography } from "@mui/material"
import Calculator from "./components/Calculator"

const App: React.FC = () => {

  return (
    <Container >
      <Typography variant="h1">React/TS Calculator</Typography>
      <Calculator />
    </Container>

  )
}

export default App
