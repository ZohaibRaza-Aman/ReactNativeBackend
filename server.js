const express = require("express");
const UserRoute = require("./Routes/UserRouter");
const AppRoute = require("./Routes/appRouter");
const mangoose = require("mongoose");
var cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/user", UserRoute);
app.use("/api/app", AppRoute);


mangoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        "Database Connected Successfully and Server is Listening on this port 3000"
      );
    });
  })
  .catch((err) => {
    console.log(err, "once more try");
  });
