import React, { useEffect, useState } from "react";
import axios from "axios";
function CreateProfile() {
    const [profile, setProfile] = useState({ bio: "", avatar: "", userId: "", });
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:4000/users/").then((res) => setUsers(res.data.data));
    }, []);
    const onChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };
    const onFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setProfile({ ...profile, avatar: reader.result });
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };
    const onSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:4000/profiles/create-profile", profile)
            .then(() => setProfile({ bio: "", avatar: "", userId: "", }));
    };
    return (
        <div>
            <h4>Create Profile</h4>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label>Bio</label>
                    <input type="text" className="form-control" name="bio" value={profile.bio} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label>Avatar</label>
                    <input type="file" className="form-control" name="avatar" accept="image/*" onChange={onFileChange} />
                    {profile.avatar && (
                        <img src={profile.avatar} width="100" className="mt-2" />
                    )}
                </div>
                <div className="mb-3">
                    <label>User ID</label>
                    <select name="userId" className="form-control" value={profile.userId} onChange={onChange} >
                        <option value="select">Select</option>
                        {users.map((user) => (
                            <option key={user._id} value={user._id}>
                                {user.username}
                            </option>
                        ))}
                    </select>
                </div>
                {/* <div className="mb-3">
                    <label>Profile Photo</label>
                    <input type="file" className="form-control" accept="image/*" OnChange={onFileChange} />
                    {user.image && (
                        <img src={user.image} width="100" className="mt-2" />
                    )}
                </div> */}
                <button className="btn btn-success">Submit</button>
            </form>
        </div>
    );
}
export default CreateProfile;
