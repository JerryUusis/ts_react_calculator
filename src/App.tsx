import { Container, Typography } from "@mui/material";
import Calculator from "./components/Calculator";

const App: React.FC = () => {
  return (
    <Container
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "500px !important"
      }}
    >
      <Typography variant="h1">React/TS Calculator</Typography>
      <Calculator />
    </Container>
  );
};

export default App;
