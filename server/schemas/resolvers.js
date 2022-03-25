const { AuthenticationError } = require("apollo-server-express");
const { User, Post } = require("../models");
const { singToken, signToken } = require("../utils/auth");
const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("Post");
        return userData;
      }
      throw new AuthenticationError("Not logged in");
    },
    // get all users
    users: async () => {
      return User.find().select("-__v -password");
    },
    // get a user by username
    User: async (parent, { username }) => {
      return User.findOne({ username }).select("-__v -password");
    },

    Post: async (parent, { stockName }) => {
      const params = stockName ? { stockName } : {};
      return Post.find(params)
      // .sort({ createdAt: -1 });
    },
    Post: async (parent, { _id }) => {
      return Post.findOne({ _id });
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = singToken(user);
      return { token, user };
    },
    login: async (parent, { email, username, password }) => {
      let user;
      if (email) {
        user = await User.findOne({ email });
      } else {
        user = await User.findOne({ username });
      }
      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const token = signToken(user);
      return { token, user };
    },
    // login: async (parent, { username, password }) => {
    //   const user = await User.findOne({ username });
    //   if (!user) {
    //     throw new AuthenticationError("Incorrect Username");
    //   }
    //   const correctPw = await user.isCorrectPassword(password);
    //   if (!correctPw) {
    //     throw new AuthenticationError("Incorrect password");
    //   }
    //   return user;
    // },
    addPost: async (parent, args) => {
      const post = await Post.create(args);
      return post;
    },
  },
};

module.exports = resolvers;
