import express from "express";
const Router = express.Router();
import { verifyUser } from "../auth/verifyUser.js";
import multer from "multer";
import PORT from "../../PORT.js";
import Users from "../models/UserModel.js";
import categories from "../models/Categories.js";

// store the book img in folder public/books
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/books");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const bookImg = multer({ storage });

// get all books from db
Router.get("/", verifyUser, (request, response) => {
  Users.find({}, (err, AllUsers) => {
    if (err) throw err;
    let Books = [];
    AllUsers.forEach((user) => {
      user.Books.forEach((Book) => Books.push(Book));
    });
    response.send({ data: Books });
  });
});

// add book
Router.post(
  `/addbook`,
  verifyUser,
  bookImg.single("img"),
  (request, response) => {
    // parse the bookData from body
    const user = request.user;
    console.log(user);
    const { name, author, category, price } = JSON.parse(request.body.bookData);
    const img = `${request.protocol}://${request.hostname}:${PORT}/books/${request.file.filename}`;

    console.log(request.body.bookData);
    console.log(request.file);
    const NewBook = {
      name,
      author,
      category,
      price,
      img,
      seller: user.name,
    };
    const { id } = request.user;
    Users.updateOne(
      { _id: id },
      {
        $push: {
          Books: NewBook,
        },
      },
      (error, rs) => {
        if (error) throw error;
        console.log(rs);
        response.end();
      }
    );
  }
);

Router.get("/get_all_sellers", (req, res) => {
  Users.find({}, (err, users) => {
    let sellers = [];
    if (err) throw err;
    users.map((user) => {
      const seller = {
        allbooks: user.Books.length,
        img: user.avatar,
      };
      sellers.push(seller);
    });
    res.send({ sellers });
  });
});

// get the user avatar and name
Router.get("/user_info", verifyUser, (req, res) => {
  const { id } = req.user;
  Users.find(
    {
      _id: id,
    },
    (error, UserInfo) => {
      if (error) throw error;
      console.log(UserInfo);
      res.send({ user: UserInfo[0], status: true });
    }
  );
});

Router.get("/all_user_books", verifyUser, (req, res) => {
  const { id } = req.user;
  Users.find({ _id: id }, (error, [user]) => {
    if (error) throw error;
    const Books = user.Books;

    res.send({ Books });
  });
});

// get the categories
Router.get("/categories", (req, res) => {
  categories.find({}, (error, categories) => {
    if (error) throw error;
    console.log(categories);
    res.send({ categories });
  });
});
export const myRouter = Router;
