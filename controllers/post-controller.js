const { Post } = require("../models");

const postController = {
  // get all post
  getAllPost(req, res) {
    Post.find({})
      .then((dbPostData) => res.json(dbPostData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // get and update one post by id
  getPostById({ params }, res) {
    Post.findOne({ _id: params.id })
      .then((dbPostData) => {
        // If no post is found, send 404
        if (!dbPostData) {
          res.status(404).json({ message: "No post found with this id!" });
          return;
        }
        res.json(dbPostData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
  // createPost
  createPost({ body }, res) {
    Post.create(body)
      .then((dbPostData) => res.json(dbPostData))
      .catch((err) => res.status(400).json(err));
  },
  updatePost({ params, body }, res) {
    Post.findOneAndUpdate({ _id: params.id }, body, { new: true })
      .then((dbPostData) => {
        // If no Post is found, send 404
        if (!dbPostData) {
          res.status(404).json({ message: "No Post found with this id!" });
          return;
        }
        res.json(dbPostData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
  // delete Post
  deletePost({ params }, res) {
    Post.findOneAndDelete({ _id: params.id })
      .then((dbPostData) => {
        if (!dbPostData) {
          res.status(404).json({ message: "No Post found with this id!" });
          return;
        }
        res.json(dbPostData);
      })
      .catch((err) => res.status(400).json(err));
  },
};

module.exports = postController;
