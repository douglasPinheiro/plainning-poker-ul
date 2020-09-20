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
