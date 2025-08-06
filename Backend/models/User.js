import mongoose from "mongoose"
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    profilePhoto: String
});
// module.exports = mongoose.model("Category", CategorySchema);
const User = mongoose.model("User", UserSchema);
export default User;