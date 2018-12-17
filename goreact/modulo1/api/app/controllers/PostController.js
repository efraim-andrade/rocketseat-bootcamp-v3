const Post = require('../models/Post');

class PostController {
  async index(req, res) {
    const posts = await Post.find();

    return res.json(posts);
  }
}

module.exports = new PostController();
