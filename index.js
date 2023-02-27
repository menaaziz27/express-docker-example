import express from "express";
import connectDB from "./db.js";

connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Api running");
});

app.get("/api/config/paypal", (req, res) => {
    res.send("paypal");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
});