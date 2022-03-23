const { Schema, model } = require("mongoose");
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

  // need virtuals for post. going to look them up later
  //
  //
  //
  //
});

// set up middleware to create password
//
//

// compare the incoming password with the hashed password
//
//
//

// create the User model using the UserSchema
const User = model("User", userSchema);
// export the User model
module.exports = User;
