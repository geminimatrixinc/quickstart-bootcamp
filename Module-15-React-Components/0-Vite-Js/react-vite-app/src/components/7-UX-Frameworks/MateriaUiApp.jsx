import  { useState } from "react";
import { AppBar, Toolbar, Typography, Button, TextField, Container, Box } from "@mui/material";

// npm install @mui/material @emotion/react @emotion/styled
// Material-Ui pro-tips : 5 mins
//https://www.youtube.com/watch?v=trFXnXtarvg

const App = () => {
  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = () => {
    alert(`You entered: ${inputValue}`);
  };

  return (
    <div>
      {/* AppBar for the header */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Material-UI Example
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main content */}
      <Container>
        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Typography variant="h4" gutterBottom>
            Welcome to Material-UI
          </Typography>
          <TextField
            label="Enter something"
            variant="outlined"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            sx={{ mb: 2, width: "300px" }}
          />
          <br />
          <Button variant="contained" color="primary" onClick={handleButtonClick}>
            Submit
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default App;