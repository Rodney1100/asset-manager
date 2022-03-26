const { AuthenticationError } = require("apollo-server-express");
// const { subscribe } = require("graphql");
const { User, Post } = require("../models");
const { signToken } = require("../utils/auth");
const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id });
        // .select("-__v -password")
        // .populate("Post");
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
      // .populate("Post");
    },

    // git one post with ID
    Post: async (parent, { ID }) => {
      const params = ID ? { ID } : {};
      return Post.findOne(params);
    },
    //  get  post for one user
    PostsUser: async (parent, { username }) => {
      return Post.find({ username }).sort({ createdAt: -1 });
    },
    // git all post posted
    allPost: async () => {
      return Post.find();
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
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
    addPost: async (parent, args) => {
      const post = await Post.create(args);
      return post;
    },

    // addPost: async (parent, args, context) => {
    //   if (context.user) {
    //   const post = await Post.create({
    //     ...args,
    //     username: context.user.username,
    //   });
    //   await User.findByIdAndUpdate(
    //     { _id: context.user._id },
    //     { $push: { post: post._id } },
    //     { new: true }
    //   );
    //   return post;
    //   }
    //   throw new AuthenticationError("You need to be logged in!");
    // },
  },
};
module.exports = resolvers;
