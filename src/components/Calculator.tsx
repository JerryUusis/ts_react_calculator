import { Box, Button, Container, Grid, OutlinedInput } from "@mui/material";

import { useState } from "react";

const Calculator : React.FC = () => {
    const [display, setDisplay] = useState<string>("")

  const columnStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  };

  const handleInput = (value : string) => {
    setDisplay(display + value)
  }
  
  const clearInput = () => {
    setDisplay("")
  }

  
  return (
    <Container sx={{display: "flex", justifyContent: "center", flexDirection:"column"}}>
        <OutlinedInput sx={{maxWidth:"350px", minWidth:"280px", mb:"1rem"}} value={display} readOnly/>
      <Grid container sx={{maxWidth:"350px", minWidth:"280px"}}>
        <Grid item xs={3} >
          <Box sx={columnStyle}>
            <Button variant="outlined" onClick={() => clearInput()}>C</Button>
            <Button variant="outlined" onClick={() => handleInput('/')}>/</Button>
            <Button variant="outlined" onClick={() => handleInput('*')}>*</Button>
            <Button variant="outlined" onClick={() => handleInput('-')}>-</Button>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box sx={columnStyle}>
            <Button variant="contained" onClick={() => handleInput('7')}>7</Button>
            <Button variant="contained" onClick={() => handleInput('4')}>4</Button>
            <Button variant="contained" onClick={() => handleInput('1')}>1</Button>
            <Button variant="outlined" onClick={() => handleInput('+')}>+</Button>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box sx={columnStyle}>
            <Button variant="contained" onClick={() => handleInput('8')}>8</Button>
            <Button variant="contained" onClick={() => handleInput('5')}>5</Button>
            <Button variant="contained" onClick={() => handleInput('2')}>2</Button>
            <Button variant="outlined" onClick={() => handleInput('=')}>=</Button>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box sx={columnStyle}>
            <Button variant="contained" onClick={() => handleInput('9')}>9</Button>
            <Button variant="contained" onClick={() => handleInput('6')}>6</Button>
            <Button variant="contained" onClick={() => handleInput('3')}>3</Button>
            <Button variant="contained" onClick={() => handleInput('0')}>0</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Calculator;
