const { User, Post } = require("../models");
const resolvers = {
  Query: {
    // get all users
    User: async () => {
      return User.find().select("-__v -password");
    },
    // get a user by username
    User: async (parent, { username }) => {
      return User.findOne({ username }).select("-__v -password");
    },

    Post: async (parent, { stockName }) => {
      const params = stockName ? { stockName } : {};
      return Post.find(params).sort({ createdAt: -1 });
    },
    Post: async (parent, { _id }) => {
      return Post.findOne({ _id });
    },
  },
};

module.exports = resolvers;
