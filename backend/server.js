const express = require("express");
const dotenv = require("dotenv");
const app = express();
dotenv.config();


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/chats", (req, res) => {
   res.send([{ chatName: "Piyush" }, { chatName: "John Doe" }]);
});
