// const express = require("express");
import express from 'express'
// const mongoose = require("mongoose");
import mongoose from "mongoose"
// const cors = require("cors");
import cors from 'cors'
// const bodyParser = require("body-parser");
import bodyParser from 'body-parser'
// const categoryRoutes = require("./routes/categoryRoutes.js");
import categoryRoutes from './routes/categoryRoutes.js'
// const productRoutes = require("./routes/productRoutes");
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import profileRoutes from './routes/profileRoutes.js'
mongoose
    .connect("mongodb://127.0.0.1:27017/ShopDB")
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));
const app = express();
app.use(cors());
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true, limit: "5mb" }));
app.use(bodyParser.json());
app.use("/categories", categoryRoutes);
app.use("/products", productRoutes);
app.use("/users", userRoutes);
app.use("/profiles", profileRoutes);
app.listen(4000, () => console.log("Server running on port 4000"));