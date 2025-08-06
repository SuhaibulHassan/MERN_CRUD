import express from 'express'
import User from '../models/User.js'
const router = express.Router();

router.post("/create-user", async (req, res) => {
     const data = await User.create(req.body);
     res.json({ data, message: "User added" });
}); 
router.get("/", async (req, res) => {
     const data = await User.find();
     res.json({ data, message: "All categories fetched" });
}); 
router.delete("/delete-user/:id", async (req, res) => {
     await User.findByIdAndDelete(req.params.id);
     res.json({ message: "User deleted" });
}); 
router.get("/get-user/:id", async (req, res) => {
     const data = await User.findById(req.params.id);
     res.json({ data });
}); 
router.put("/update-user/:id", async (req, res) => {
     const data = await User.findByIdAndUpdate(req.params.id, req.body, {
          new: true,
     });
     res.json({ data, message: "User updated" });
});
// module.exports = router;
export default router;