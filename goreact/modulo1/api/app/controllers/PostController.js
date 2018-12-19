const Post = require('../models/Post');

class PostController {
  async index(req, res) {
    const posts = await Post.find();

    return res.json(posts);
  }

  async store(req, res) {
    Post.create(req.body);

    return res.json(Post);
  }
}

module.exports = new PostController();
