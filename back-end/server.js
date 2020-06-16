import express from "express";
import dotenv from "dotenv";
const server = express();
import PORT from "./PORT.js";
import { myRouter as mainRoutes } from "./src/routes/main.js";
import { userAuth } from "./src/routes/auth.js";
import cors from "cors";
import { db } from "./src/database/mongoDb.js";

dotenv.config();

server.use(cors());
server.use(express.static("public"));
server.use(express.json());

server.use("/main", mainRoutes);
server.use("/user", userAuth);

server.listen(PORT, () => console.log("serve runing"));
