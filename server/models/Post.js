const { Schema, model } = require("mongoose");
const PostSchema = new Schema({
  stockName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 6,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  purchaseAt: {
    type: Date,
    default: Date.now,
  },
  amountBought: {
    type: Number,
    required: true,
    minlength: 2,
    maxlength: 6,
  },
  pricedAt: {
    type: Number,
    required: true,
    minlength: 2,
    maxlength: 6,
  },
});
// create the Post model using the PostSchema
const Post = model("Post", PostSchema);
// export the Post model
module.exports = Post;
