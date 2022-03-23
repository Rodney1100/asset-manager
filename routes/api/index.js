const router = require('express').Router();
const postRoutes = require('./post-routes');
const userRoutes = require('./user-routes');

// add prefix of `/posts` to routes created in `post-routes.js`
router.use('/posts', postRoutes);
router.use('/user', userRoutes);

module.exports = router;