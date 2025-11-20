const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// router for order endpoints
const orderRouter = require("./routes/order");
// mount router at /api/v1/order
app.use("/api/v1/order", orderRouter);

// simple request logger to help debug routing
app.use((req, res, next) => {
    console.log(new Date().toISOString(), req.method, req.originalUrl);
    next();
});

app.listen(3000, () => {
    console.log("server is running on http://localhost:3000");
});