const bodyParser = require("body-parser");
const express = require("express");
const dbConnect = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;
const app = express();


const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

app.use(bodyParser.json());
app.use('/person',personRoutes);
app.use('/menu',menuItemRoutes);


app.listen(PORT, () => {
  console.log(`Server is listening at port localhost:${PORT}`);
});
