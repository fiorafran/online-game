import Express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
import router from "./routes/index.js";

const app = Express();
const server = createServer(app);
const io = new Server(server);

app.use(router);

app.use(Express.json());

io.on("connection", (socket) => {

  console.log("user join your channel");
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });

});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log("server running at http://localhost:3000");
});
