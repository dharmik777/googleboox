const express = require("express");
const mongoose = require ("mongoose");
const routes= require ("./routes")

const app = express();
const PORT = process.env.PORT || 3001;


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes)

// const MONGODB_URI = 'mongodb+srv://dharmik:Monkey1@thisonewillwork.698vd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'


// 'mongodb://localhost/googlebooks'
//Connet to mongoose
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb+srv://dharmik:Monkey1@thisonewillwork.698vd.mongodb.net/googleman',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

mongoose.connection.on('connected', ()=> {
  console.log('Mongoose is connected!!!')
});


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});


