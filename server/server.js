const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");

// impost typeDefs and resolvers
const { typeDefs, resolvers } = require("./schemas");
const{authMiddleware}= require("./utils/auth")
const db = require("./config/connection.js");

const PORT = process.env.PORT || 3001;
const app = express();

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context:authMiddleware,
 
  });

  // Start the apollo server
  await server.start();
  server.applyMiddleware({ app });
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
};

startServer();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once("open", () => {
  app.listen(PORT, () => console.log(`Connected on localhost:${PORT}`));
});
