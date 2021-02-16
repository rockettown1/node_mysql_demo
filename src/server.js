require("./db/connection");
const express = require("express");
const path = require("path");
const cors = require("cors");
const { getAllUsers, registerUser } = require("./controllers/");

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/")));

app.get("/total", getAllUsers);
app.post("/register", registerUser);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
