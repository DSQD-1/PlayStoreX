require("dotenv").config();

const express = require("express");
const cors = require("cors");


const usersRouter = require("./routes/users");


const app = express();


app.use(cors());

app.use(express.json());



app.use("/api/users", usersRouter);



app.get("/", (req, res) => {

  res.json({

    message: "PlayStoreX API работает 🚀"

  });

});



const PORT = process.env.PORT || 3001;



app.listen(PORT, () => {

  console.log(
    `Server started on port ${PORT}`
  );

});