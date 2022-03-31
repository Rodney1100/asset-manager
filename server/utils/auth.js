// const { rename } = require("fs");
const jwt = require("jsonwebtoken");
const secret = process.env.secret;
const expiration = "3h";

module.exports = {
  authMiddleware: function ({ req }) {
    // console.log(req.headers)
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;
    //  separate "Bearer" from "<tokenvalue>""
    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }
    // console.log(token);
    if (!token) {
      return req;
    }
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log("Invalid token");
    }
    return req;
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
