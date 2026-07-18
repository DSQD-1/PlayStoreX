const express = require("express");

const router = express.Router();


const {
  createUser,
  getUser
} = require("../users");



router.post("/login", async (req, res) => {

  const user = req.body;


  if (!user.id) {

    return res.status(400).json({

      error: "Telegram user id required"

    });

  }



  let existingUser = await getUser(user.id);



  if (!existingUser) {

    existingUser = await createUser(user);

  }



  res.json({

    user: existingUser

  });


});



module.exports = router;