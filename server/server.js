const express = require('express');
const app = express();
const cors = require('cors');
require("dotenv").config();

app.use(express.json());
app.use(cors());

console.log(process.env.LOCAL_HOST);

const db = require('./models');

// Routers
const planRouter = require('./routes/Plans');
app.use("/plans", planRouter);


db.sequelize
    .sync()
    .then(() => {
        app.listen(process.env.PORT || 3001, () => {
            console.log("Server running on port 3001");
        });
    })
    .catch((err) => {
        console.log(err);
    });