import express from "express";
import PORT from "../../PORT.js";
const Router = express.Router();
import uuid from "uuid";
import multer from "multer";
import JWT from "jsonwebtoken";
import Users from "../models/UserModel.js";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/clientsAvatars");
  },
  filename: (req, file, cb) => {
    cb(null, `${uuid.v1()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

Router.post("/signup", upload.single("avatar"), (request, response) => {
  // parse string obj
  const UserData = JSON.parse(request.body.User);

  // get all users
  Users.find({}, (error, clients) => {
    if (error) throw error;
    console.log(clients);
    // get the user that try to sign up
    const User = clients.find((client) => client.name === UserData.name);

    if (!User) {
      const Client = {
        name: UserData.name,
        password: UserData.password,
        cuntry: "Sudan",
        avatar: `${request.protocol}://${request.hostname}:${PORT}/clientsAvatars/${request.file.filename}`,
        Books: [],
      };

      Users.insertMany([Client], (err, [rst]) => {
        if (err) throw err;

        const token = JWT.sign(
          { id: rst._id, name: rst.name },
          process.env.TOKEN_SECRET
        );
        response.send({ token, status: true });
      });
    } else {
      console.log("user exist");
    }
  });
});

Router.post("/login", (req, res) => {
  const UserData = req.body;

  Users.find({}, (error, clients) => {
    if (error) throw error;

    const user = clients.find((client) => client.name === UserData.name);

    if (user) {
      const token = JWT.sign(
        { id: user._id, name: user.name },
        process.env.TOKEN_SECRET
      );

      res.json({ user, token });
    } else {
      res.json({ user: false });
    }
  });
});

export const userAuth = Router;
