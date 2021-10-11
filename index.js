import express from "express";
const mongoose = require("mongoose");

const app = express();
const PORT = 4000;

// bodyparser setup
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/productsdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", (req, res) => res.send(`Store server running on port ${PORT}`));

app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`));
