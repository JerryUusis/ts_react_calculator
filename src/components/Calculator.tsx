import { Box, Button, Container, Grid, OutlinedInput } from "@mui/material";
import { useState } from "react";
import { create, all } from "mathjs";

const Calculator: React.FC = () => {
  const [display, setDisplay] = useState<string>("");
  const math = create(all);

  const columnStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const handleInput = (value: string) => {
    if (display === "Syntax error") {
      clearInput();
    } else {
      setDisplay(display + value);
    }
  };

  const clearInput = () => {
    setDisplay("");
  };

  const handleCalculate = () => {
    try {
      const result = math.evaluate(display);
      if (Number.isInteger(result)) {
        setDisplay(result.toString());
      } else {
        setDisplay(result.toFixed(3));
      }
    } catch (error) {
      setDisplay("Syntax error");
    }
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "350px", minWidth: "280px"
      }}
    >
      <OutlinedInput
        sx={{
          maxWidth: "350px",
          minWidth: "280px",
          my: "1rem",
          width: "100%",
        }}
        value={display}
        readOnly
      />
      <Grid container >
        <Grid item xs={3}>
          <Box sx={columnStyle}>
            <Button variant="outlined" onClick={() => clearInput()}>
              C
            </Button>
            <Button variant="outlined" onClick={() => handleInput("/")}>
              /
            </Button>
            <Button variant="outlined" onClick={() => handleInput("*")}>
              *
            </Button>
            <Button variant="outlined" onClick={() => handleInput("-")}>
              -
            </Button>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box sx={columnStyle}>
            <Button variant="contained" onClick={() => handleInput("7")}>
              7
            </Button>
            <Button variant="contained" onClick={() => handleInput("4")}>
              4
            </Button>
            <Button variant="contained" onClick={() => handleInput("1")}>
              1
            </Button>
            <Button variant="contained" onClick={() => handleInput("0")}>
              0
            </Button>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box sx={columnStyle}>
            <Button variant="contained" onClick={() => handleInput("8")}>
              8
            </Button>
            <Button variant="contained" onClick={() => handleInput("5")}>
              5
            </Button>
            <Button variant="contained" onClick={() => handleInput("2")}>
              2
            </Button>
            <Button variant="outlined" onClick={() => handleInput("+")}>
              +
            </Button>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box sx={columnStyle}>
            <Button variant="contained" onClick={() => handleInput("9")}>
              9
            </Button>
            <Button variant="contained" onClick={() => handleInput("6")}>
              6
            </Button>
            <Button variant="contained" onClick={() => handleInput("3")}>
              3
            </Button>
            <Button variant="outlined" onClick={() => handleCalculate()}>
              =
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Calculator;
