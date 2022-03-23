const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const mongoose = require("mongoose");
const gql = require("graphql-tag");
const app = express();
const PORT = process.env.PORT || 3001;
const Post = require("./models/Post");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
// const typeDefs = gql`
// type Post{
//   id:ID
// }
// type Query{
//   getPosts
// }
// `;

// const resolvers = {
//   Query: {
//     getPosts,
//   },
// };

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1/asset-manager",
  {}
);

// Use this to log mongo queries being executed!
mongoose.set("debug", true);

app.use(require("./routes"));

app.listen(PORT, () => console.log(`Connected on localhost:${PORT}`));
