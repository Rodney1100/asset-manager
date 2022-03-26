const { Schema, model } = require("mongoose");
const postSchema = new Schema({
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
    maxlength: 10,
  },
  pricedAt: {
    type: Number,
    required: true,
    minlength: 2,
    maxlength: 6,
  },
  username: {
    type: String,
    required: true,
  },
  // username: {
  //   type: Schema.Types.ObjectId,
  //   ref: "user",
  // },
});

// create the Post model using the PostSchema
const Post = model("Post", postSchema);

// export the Post model
module.exports = Post;
