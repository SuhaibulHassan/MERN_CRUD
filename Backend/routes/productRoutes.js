// const express = require("express");
import express from 'express';
const router = express.Router();
// const Product = require("../models/Product");
import Product from '../models/Products.js'

router.post("/create-product", async (req, res) => {
    const data = await Product.create(req.body);
    res.json({ data, message: "Product added" });
}); 

router.get("/", async (req, res) => {
    const data = await Product.find().populate("category", "name");
     res.json({ data, message: "All products fetched" });
});

router.delete("/delete-product/:id", async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted" });
}); 

router.get("/get-product/:id", async (req, res) => {
    const data = await Product.findById(req.params.id).populate(
        "category",
        "name"
    );
    res.json({ data });
});

router.put("/update-product/:id", async (req, res) => {
    const data = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.json({ data, message: "Product updated" });
});
// module.exports = router;
export default router;