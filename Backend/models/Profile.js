import mongoose from "mongoose"

const ProfileSchema = new mongoose.Schema({
  bio: String,
  avatar: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

// module.exports = mongoose.model('Profile', profileSchema);
const Profile = mongoose.model("Profile", ProfileSchema);
export default Profile;