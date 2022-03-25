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
    purchaseAt: Float
    amountBought: Float
    pricedAt: Float
    username: String
  }

  type Query {
    me: User
    users: [User]
    User(username: String!): User
    Post: [Post]
    Posts(stockName: String): [Post]
    post(_id: ID!): Post
  }

  type Mutation {
    login(email: String, username: String, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPost(
      stockName: String!
      purchaseAt: Float!
      amountBought: Float!
      pricedAt: Float!
      username: String!
    ): Post
  }
  type Auth {
    token: ID
    user: User
  }
`;

module.exports = typeDefs;
