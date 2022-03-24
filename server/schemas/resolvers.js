const { AuthenticationError } = require("apollo-server-express");
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

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      return user;
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("Incorrect Username");
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect password");
      }
      return user;
    },
  },
};

module.exports = resolvers;
