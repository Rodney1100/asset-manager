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
    postByUser: [Post]
  }

  type Post {
    _id: ID
    stockName: String
    createdAt: String
    purchaseAt: String
    amountBought: Float
    pricedAt: Float
    username: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    User(username: String!): User
    PostsUser(username: String): [Post]
    Post(_id: ID!): Post
    allPost:[Post]
  }

  type Mutation {
    login(email: String, username: String, password: String): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPost(
      stockName: String!
      purchaseAt: Float!
      amountBought: Float!
      pricedAt: Float!
      username: String!
    ): Post
  }
`;

module.exports = typeDefs;
