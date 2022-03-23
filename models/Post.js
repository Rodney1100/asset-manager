const { Schema, model } = require("mongoose");
const PostSchema = new Schema({
  stockName: {
    type: String,
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
  },
  pricedAt: {
    type: Number,
  },
});
// create the Post model using the PostSchema
const Post = model("Post", PostSchema);

// export the Post model
module.exports = Post;
