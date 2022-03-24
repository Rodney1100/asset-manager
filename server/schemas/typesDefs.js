// import the gql tagged template
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
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

  type Query {
    User: [User]
    Post: [Post]
    Posts(stockName: String): [Post]
    post(_id: ID!): Post
  }

  type Mutation {
    login(email: String!, password: String!): User
    addUser(username:String!, email:String!, password:String!):User
  }
`;

module.exports = typeDefs;
