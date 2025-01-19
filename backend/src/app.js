import express from "express";
import rooms from "./mock.js";

const app = express();

app.get("/rooms", (req, res) => {
  res.send(rooms);
});

app.get("/rooms/:roomsId", (req, res) => {
  const id = Number(req.params.roomsId);
  const room = rooms.find((room) => room.id === id);
  if (room) {
    res.send(room);
  } else {
    res.status(404).send({ message: "Cannot find given id" });
  }
});

app.listen(3000, () => console.log("Server Started"));
