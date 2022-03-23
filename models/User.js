const { Schema, model } = require("mongoose");
const USerSchema = new Schema({
  userName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
// create the User model using the UserSchema
const User = model("User", USerSchema);

// export the User model
module.exports = User;
