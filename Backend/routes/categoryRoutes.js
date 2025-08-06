// const express = require("express");
import express from 'express'
import Category from '../models/Category.js'
const router = express.Router();
// const Category = require("../models/Category");
router.post("/create-category", async (req, res) => {
     const data = await Category.create(req.body);
     res.json({ data, message: "Category added" });
}); 
router.get("/", async (req, res) => {
     const data = await Category.find();
     res.json({ data, message: "All categories fetched" });
}); 
router.delete("/delete-category/:id", async (req, res) => {
     await Category.findByIdAndDelete(req.params.id);
     res.json({ message: "Category deleted" });
}); 
router.get("/get-category/:id", async (req, res) => {
     const data = await Category.findById(req.params.id);
     res.json({ data });
}); 
router.put("/update-category/:id", async (req, res) => {
     const data = await Category.findByIdAndUpdate(req.params.id, req.body, {
          new: true,
     });
     res.json({ data, message: "Category updated" });
});
// module.exports = router;
export default router;
