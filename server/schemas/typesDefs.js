// import the gql tagged template
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
  type Query {
    helloWorld: String
  }
`;

module.exports = typeDefs;
