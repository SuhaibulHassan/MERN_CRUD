import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
function EditProfile() {
    const [profile, setProfile] = useState({
        bio: "", avatar: "", userId: "",
});
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        axios
            .get("http://localhost:4000/Profiles/")
            // .then((res) => setCategories(res.data.data));
        axios.get("http://localhost:4000/Profiles/get-profile/" + id).then((res)=>
            setProfile({
                bio: res.data.data.bio,
                avatar: res.data.data.avatar || "",
                userId: res.data.data.userId,
            })
    );
}, [id]);
const onChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
};

const onFileChange=(e)=>{
    const file = e.target.files[0];
    const reader = new FileReader();
    console.log(reader);
    
    reader.onloadend = () => {
        setProfile({...profile, avatar: reader.result});
    };
    if(file){
        reader.readAsDataURL(file);
    }
}

const onSubmit = (e) => {
    e.preventDefault();
    axios
        .put("http://localhost:4000/profiles/update-profile/" + id, profile)
        .then(() => navigate("/profile-list"));
}
return (
    <div>
        <h4>Edit User</h4>
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label>Bio</label>
                <input
                    type="text"
                    className="form-control" name="bio"
                    value={profile.bio}
                    onChange={onChange}
                />
            </div>
            <div className="mb-3">
                <label>Avatar</label>
                <input
                    type="file"
                    className="form-control"
                    name="avatar"
                    accept="image/*"
                    onChange={onFileChange}
                />
                {profile.avatar && (
                    <img src={profile.avatar} alt="Preview" width="100" className="mt-2" />
                )}
            </div>
            <div className="mb-3">
                <label>USer ID</label>
                <input
                    type="text"
                    className="form-control" name="userId"
                    value={profile.userId}
                    onChange={onChange}
                />
            </div>
            <button className="btn btn-primary">Update</button>
        </form>
    </div>
);
}
export default EditProfile;