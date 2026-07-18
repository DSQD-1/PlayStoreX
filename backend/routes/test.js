const express = require("express");

const router = express.Router();

const supabase = require("../database");



router.get("/", async (req, res) => {


  const { data, error } = await supabase

    .from("users")

    .select("*");



  if (error) {

    return res.status(500).json({

      error: error.message

    });

  }



  res.json({

    success: true,

    users: data

  });


});



module.exports = router;