const { response, request } = require("express");
const express = require("express");
const router = express.Router();
const signUpTemplate = require("../models/SignUpModels");

// a post becuase when people sign up we post data to database
router.post("/signup", (req, res) => {
  const signedUpUser = new signUpTemplateCopy({
    fullName: request.body.fullName,
    username: request.body.username,
    email: request.body.email,
    password: request.body.password,
  });
  signedUpUser
    .save()
    .then((data) => response.json(data))
    .catch((err) => console.log(err));
});

module.exports = router;
