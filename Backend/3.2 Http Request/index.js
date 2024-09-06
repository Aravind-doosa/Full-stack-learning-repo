import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
   res.send("<h1>Hello World</h1>");
});

app.get("/About", (req, res) => {
    res.send("<h1>About</h1><p>My name is Aravind</p>");
})

app.get("/Contact", (req, res) => {
    res.send("<h1>Contact</h1><p>Mobile: +919951528830</p>");
})

app.listen(port, () => {
    console.log(`Server is runnimg on port ${port}.`);
});