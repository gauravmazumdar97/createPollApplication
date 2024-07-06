const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
let socketNumber = 0;
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

app.use(cors());

let votes = [5, 1, 3, 2];
let userVotes = {}; // Track user votes

io.on("connection", (socket) => {
  console.log(`Connection number: ${socketNumber} and User Connected: ${socket.id}`);
  socketNumber++;

  // Send initial votes to newly connected client
  socket.emit("update_votes", votes);

  socket.on("vote", (index) => {
    if (userVotes[socket.id]) {
      // User has already voted
      socket.emit("vote_error", "You have already voted.");
    } else {
      console.log('Received vote for index', index);
      if (index >= 0 && index < votes.length) {
        votes[index] += 1;
        userVotes[socket.id] = true; // Mark user as having voted
        
        // Broadcast updated votes to all clients
        io.emit("update_votes", votes);
      }
    }
  });

  socket.on("disconnect", () => {
    console.log(`User Disconnected: ${socket.id}`);
    socketNumber--;
    delete userVotes[socket.id]; // Remove user from vote tracking
  });
});

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});
