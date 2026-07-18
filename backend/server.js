const express = require("express");
const cors = require("cors");


const app = express();


app.use(cors());

app.use(express.json());



app.get("/", (req, res) => {

  res.json({

    message: "PlayStoreX API работает 🚀"

  });

});



const PORT = 3001;


app.listen(PORT, () => {

  console.log(
    `Server started on port ${PORT}`
  );

});