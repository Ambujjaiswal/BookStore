import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"
import contactRoute from "./route/contact.route.js"
import cors from "cors"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;
app.use(cors())  // This is an middleware

// Jo bhi data hum body se bhej rahe hai use json mein parse karega
app.use(express.json());

// CONNECTION TO MONGODB
mongoose.connect('mongodb://localhost:27017/yourDatabaseName', {
    useNewUrlParser: true, // this option is no longer necessary
    useUnifiedTopology: true // this option is no longer necessary
  }).then(() => {
    console.log('Connected to MongoDB');
  }).catch(err => {
    console.error('Failed to connect to MongoDB', err);
  });

// Defining routes- This route is handled by the getBook function.
app.use("/book", bookRoute)
// /book/Home/getBook
app.use("/user", userRoute);
app.use("/contact", contactRoute);


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
