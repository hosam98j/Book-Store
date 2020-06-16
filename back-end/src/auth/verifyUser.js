import JWT from "jsonwebtoken";

export const verifyUser = (req, res, next) => {
  // authorization value that include barer
  const authHeader = req.headers.authorization; // value is null or token

  // extract token from authorization and exclude the bearer
  const token = authHeader && authHeader.split(" ")[1]; // value null or second part of token

  // if token is null or undefinde
  if (token == null) {
    console.log("token not found");
    return res.send({ user: false, msg: "token not found" });
  }

  // if token is founded and extracted
  if (token) {
    // check if that token is valid
    JWT.verify(token, process.env.TOKEN_SECRET, (error, user) => {
      // if token is not valed
      if (error) {
        console.log("token not valid");
        return res.send({ msg: "token not valid", user: false });
      }

      // if token is valed set property user to the request Object
      req.user = user;

      // call the requested route
      next();
    });
  }
};
