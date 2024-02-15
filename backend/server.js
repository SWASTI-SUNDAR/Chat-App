const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

const connectDB = require("./config/db");

const colors = require("colors");

const userRoutes = require("./routes/userRoutes");

const { notFound, errorHandler } = require("./middleware/errorMiddleware");

// Error Handling middlewares- notFound and errorHandler
app.use(notFound);
app.use(errorHandler);

connectDB();
app.use(express.json());

app.use("/api/user", userRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`.blue.bold);
});


if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}

app.get("/chats", (req, res) => {
  res.send([{ chatName: "Piyush" }, { chatName: "John Doe" }]);
});
