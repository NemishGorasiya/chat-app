import express from "express";
import http from "http";
import { Server as SocketIoServer } from "socket.io";
import cors from "cors";

const app = express();

// Use CORS middleware
app.use(
  cors({
    origin: "*", // Replace with your frontend URL
    methods: ["GET", "POST"],
    credentials: true,
    allowedHeaders: ["Content-Type"],
  })
);

const server = http.createServer(app);
const io = new SocketIoServer(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("New client connected");
  console.log("Socket ID:", socket.id); // Log the unique socket ID
  console.log("Client IP:", socket.handshake.address); // Log the client's IP address
  socket.on("message", (message) => {
    console.log(
      `Message from ${socket.id} (${socket.handshake.address}):`,
      message
    );
    io.emit("message", { content: message, socketId: socket.id });
  });
  socket.on("disconnect", () => {
    console.log(
      `Client ${socket.id} (${socket.handshake.address}) disconnected`
    );
  });
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
