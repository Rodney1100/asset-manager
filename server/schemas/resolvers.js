const { User, Post } = require("../models");
const resolvers = {
  Query: {
    User: async () => {
      return User.find();
    },
    Post: async () => {
      return Post.find().sort({ createdAt: -1 });
    },
  },
};

module.exports = resolvers;
