const bodyParser = require("body-parser");
const express = require("express");
const dbConnect = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;
const ageFilter = require("./middleware/ageFilter");
const logRequest = require("./middleware/logRequest");
const passport = require('./middleware/auth');
const app = express();
// const router = express.Router();
const personRoutes = require("./routes/personRoutes");
const menuItemRoutes = require("./routes/menuItemRoutes");
const localMiddleware = passport.authenticate("local", { session: false });
app.use(bodyParser.json());
app.use(passport.initialize());
// app.use(ageFilter);
// app.use(logRequest);
app.get("/", (req, res) => {
  res.send("Welcome to the Hotel!!!");
});
app.use("/person", personRoutes);
app.use("/menu",localMiddleware, menuItemRoutes);
// router.use(ageFilter);
// app.use('/',router);

app.listen(PORT, () => {
  console.log(`Server is listening at port localhost:${PORT}`);
});
