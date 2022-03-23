const router = require("express").Router();
const {
  getAllPost,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} = require("../../controllers/post-controller");

// /api/Posts
router.route("/").get(getAllPost).post(createPost);

// /api/Posts/:id
router.route("/:id").get(getPostById).put(updatePost).delete(deletePost);

module.exports = router;
