import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/api/v1/",
});

export const createRoom = (roomName, userName) => {
  return instance.post("rooms", {
    roomName,
    userName,
  });
};

export const joinRoom = (roomId, userName) => {
  return instance.post(`rooms/join/${roomId}`, {
    name: userName,
  });
};

export const getRoom = (roomId) => {
  return instance.get(`rooms/${roomId}`);
};
