const express = require('express')
//const {MongoClient} = require('mongodb');
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const cors = require('cors');




dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log("hello  " + process.env.MONGO_URL);
    console.log(err);
  });


app.use(express.json())

// app.use(function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   next();
// });

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

app.listen( 8000, () =>{
    console.log("The server is runing");
})
app.use("/api/auth", authRoute)
app.use("/api/products", productRoute);
app.use("/api/users", userRoute)
app.use("/api/cart", cartRoute)
app.use("/api/orders", orderRoute)