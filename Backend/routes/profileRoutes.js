import express from 'express'
import Profile from '../models/Profile.js'
const router = express.Router();
// const Category = require("../models/Category");
router.post("/create-profile", async (req, res) => {
     const data = await Profile.create(req.body);
     res.json({ data, message: "Profile added" });
}); 
router.get("/", async (req, res) => {
     const data = await Profile.find();
     res.json({ data, message: "All profiles fetched" });
}); 
router.delete("/delete-profile/:id", async (req, res) => {
     await Profile.findByIdAndDelete(req.params.id);
     res.json({ message: "Profile deleted" });
}); 
router.get("/get-profile/:id", async (req, res) => {
     const data = await Profile.findById(req.params.id);
     res.json({ data });
}); 

router.get("/get-profile-details/:id",async(req,res)=>{
     const data=await Profile.findOne({userId:req.params.id})     
     res.json({ data })
})

router.put("/update-profile/:id", async (req, res) => {
     const data = await Profile.findByIdAndUpdate(req.params.id, req.body, {
          new: true,
     });
     res.json({ data, message: "Profile updated" });
});
// module.exports = router;
export default router;