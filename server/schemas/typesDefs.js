// import the gql tagged template
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    createdAt: String
  }

  type Post {
    _id: ID
    stockName: String
    createdAt: String
    purchaseAt: Int
    amountBought: Int
    pricedAt: Int
  }

`;

module.exports = typeDefs;
