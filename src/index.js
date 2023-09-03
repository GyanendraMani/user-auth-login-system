const express = require("express");

const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    res.send("<h1>Hello world!!!</h1>")
});

app.listen(PORT, (req, res)=>{
    console.log(`listening Endpoint is http://localhost:${PORT}`);
});