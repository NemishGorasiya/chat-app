import express from "express";
import http from "http";
import { Server as SocketIoServer } from "socket.io";
import cors from "cors";

const app = express();

// Use CORS middleware
app.use(
	cors({
		origin: "http://localhost:5173", // Replace with your frontend URL
		methods: ["GET", "POST"],
		allowedHeaders: ["Content-Type"],
	})
);

const server = http.createServer(app);
const io = new SocketIoServer(server, {
	cors: {
		origin: "http://localhost:5173", // Replace with your frontend URL
		methods: ["GET", "POST"],
	},
});

io.on("connection", (socket) => {
	console.log("New client connected");
	socket.on("message", (message) => {
		console.log("message", message);
		io.emit("message", message);
	});
	socket.on("disconnect", () => {
		console.log("Client disconnected");
	});
});

const PORT = 3001;
server.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
