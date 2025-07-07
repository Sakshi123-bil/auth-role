const express = require("express");
const dotenv = require("dotenv").config({ path: './.env' });
const dbConnect = require("./src/config/dbConnect");
const authRoutes = require("./src/routes/authRoutes");
const usersRoutes = require("./src/routes/usersRoutes");

const app = express();

dbConnect();

app.use(express.json());

app.use("/api/auth",authRoutes);
app.use("/api/users",usersRoutes);
const PORT = process.env.PORT || 7000;
app.listen(PORT,()=>{
console.log(`listening on the port ${PORT}`)
})