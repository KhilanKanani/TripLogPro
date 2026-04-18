const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('./config/ConnectDB');

const Port = process.env.PORT || 2511;

const compressor = require('compression');
app.use(compressor());

app.use(express.json());
const cors = require('cors');
app.use(cors(
    {
        origin: process.env.ORIGIN,
        credentials: true
    }
));

app.use('/api/trip', require('./routes/TripRoute'));

app.get("/", (req, res) => {
    res.send("TripLog Pro Server Running");
});

app.listen(Port, () => {
    connectDB();
    console.log(`Server is running on port ${Port}`);
});