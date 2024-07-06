import "./App.css";
import io from "socket.io-client";
import { useEffect, useState } from "react";
import { BarChart } from '@mui/x-charts/BarChart';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const socket = io.connect("http://localhost:3001");

const xLabels = ['JavaScript', 'NodeJS', 'Angular', 'ReactJS'];

function App() {
  const [votes, setVotes] = useState([5, 1, 3, 2]);
  const [errorMessage, setErrorMessage] = useState("");

  const vote = (index) => {
    socket.emit('vote', index);
  };

  useEffect(() => {
    socket.on("update_votes", (newVotes) => {
      setVotes(newVotes);
    });

    socket.on("vote_error", (message) => {
      setErrorMessage(message);
    });

    // Clean up socket connection on component unmount
    return () => {
      socket.off("update_votes");
      socket.off("vote_error");
    };
  }, []);

  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={12}>
            <h1>THIS IS A VOTING BAR CHART USING SOCKET.IO</h1>
          </Grid>
        </Grid>
      </Box>

      <Container maxWidth="sm">
        <BarChart
          width={500}
          height={300}
          series={[{ data: votes, id: 'pvId', stack: 'total' }]}
          xAxis={[{ data: xLabels, scaleType: 'band' }]}
        />
      </Container>

      <Box sx={{ flexGrow: 1 }}>
        <h3>Choose any one</h3>
        <Grid container spacing={2}>
          {xLabels.map((label, index) => (
            <Grid key={index} xs={3}>
              <Item>
                <Button onClick={() => vote(index)} variant="contained">
                  {label.toUpperCase()}
                </Button>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>

      {errorMessage && (
        <Box sx={{ flexGrow: 1, mt: 2 }}>
          <Grid container spacing={2}>
            <Grid xs={12}>
              <Item>
                <p style={{ color: "red" }}>{errorMessage}</p>
              </Item>
            </Grid>
          </Grid>
        </Box>
      )}
    </div>
  );
}

export default App;
