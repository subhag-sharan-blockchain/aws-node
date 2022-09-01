const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Starting with Node.js");
});

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log("Wazzappppp");
});