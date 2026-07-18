require("dotenv").config();

const express = require("express");
const cors = require("cors");


const usersRouter = require("./routes/users");
const testRouter = require("./routes/test");


const app = express();


app.use(cors());

app.use(express.json());


// Users API
app.use("/api/users", usersRouter);


// Test API
app.use("/api/test", testRouter);



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