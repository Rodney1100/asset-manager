// const { rename } = require("fs");
const jwt = require("jsonwebtoken");
const secret = "ThisSecretWillBeChanged";
const expiration = "1h";

module.exports = {
  authMiddleware: function ({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;
    //  separate "Bearer" from "<tokenvalue>""
    if (req.headers.authorization) {
      token = token.split().pop().trim();
    }
    if (!token) {
      return req;
    }
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
    } catch {
      console.log("Invalid token");
    }
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
