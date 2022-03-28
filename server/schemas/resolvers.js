const { AuthenticationError } = require("apollo-server-express");
// const { subscribe } = require("graphql");
const { User, Post } = require("../models");
const { signToken } = require("../utils/auth");
const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id });
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

    // git one post with ID
    Post: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Post.findOne(params).sort({ createdAt: -1 });
    },
    //  get  post for one user
    singleUserPost: async (parent, { username }) => {
      return Post.find({ username }).sort({ createdAt: -1 });
    },
    // git all post posted
    allPost: async () => {
      return Post.find();
    },
  },

  Mutation: {
    // creates a user who can log in and post
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },

    // delete user account along with their old post.
    deleteUser: async (parent, { username }, context) => {
      const params = username ? { username } : {};
      const user = await User.findOne(username);
      //  if user is logged in they can delete their account
      if (context.user) {
        console.log(user);
      } else {
        throw new AuthenticationError("Action not allowed");
      }
      throw new Error(err);
    },

    // Edit a users email, password, or username
    // updateUsername: async (parent, { _id }) => {
    //   User.findByIdAndUpdate({ _id });
    //   return User;
    // },
    //  only a created user can login
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

    // adds post when a user is logged in
    addPost: async (parent, args, context) => {
      if (context.user) {
        const post = await Post.create({
          ...args,
          username: context.user.username,
        });
        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { post: post._id } },
          { new: true }
        );
        return post;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    // delete post
    deletePost: async (parent, { _id }, context) => {
      // if user is logged in they can delete their post
      if (context.user) {
        const params = _id ? { _id } : {};
        const post = await Post.findById(_id);
        // if the post names match user name
        if (context.user.username === post.username) {
          await post.delete();
          return "Post deleted successfully";
        } else {
          throw new AuthenticationError("Action not allowed");
        }
      }
      throw new Error(err);
    },
  },
};
module.exports = resolvers;
