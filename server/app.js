const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// const Candidates = require('./models/Candidate');
const Candidate = require('./routes/candidateRoute.js');
const cookieParser = require('cookie-parser')
const Voter = require('./routes/voterRoute.js');
const Official = require('./routes/officialRoute.js');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(
    cors({
      origin: "http://localhost:3000",
    })
  );
app.use(express.json());
app.use(cookieParser())

try {
    const uri = process.env.MONGO_URI;
    mongoose.connect(uri);
    const connection = mongoose.connection;

    connection.once('open', () => {
        console.log("MongoDB database connection established successfully");
    });
} catch (error) {
    console.error("Error connecting to MongoDB:", error);
}

app.use('/candidate', Candidate);
app.use('/voter', Voter);
app.use('/official', Official);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})