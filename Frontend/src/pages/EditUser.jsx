import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
function EditUser() {
    const [user, setUser] = useState({
        username: "", email: "", profilePhoto: "",
});
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        axios
            .get("http://localhost:4000/Users/")
            // .then((res) => setCategories(res.data.data));
        axios.get("http://localhost:4000/Users/get-user/" + id).then((res)=>
            setUser({
                username: res.data.data.username,
                email: res.data.data.email,
                // category: res.data.data.category._id,
                profilePhoto: res.data.data.profilePhoto || "",
            })
    );
}, [id]);
const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
};

const onFileChange=(e)=>{
    const file = e.target.files[0];
    const reader = new FileReader();
    console.log(reader);
    
    reader.onloadend = () => {
        setUser({...user, profilePhoto: reader.result});
    };
    if(file){
        reader.readAsDataURL(file);
    }
}

const onSubmit = (e) => {
    e.preventDefault();
    axios
        .put("http://localhost:4000/users/update-user/" + id, user)
        .then(() => navigate("/user-list"));
}
return (
    <div>
        <h4>Edit User</h4>
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label>User Name</label>
                <input
                    type="text"
                    className="form-control" name="username"
                    value={user.username}
                    onChange={onChange}
                />
            </div>
            <div className="mb-3">
                <label>Email</label>
                <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={user.email}
                    onChange={onChange}
                />
            </div>
            <div className="mb-3">
                <label>Profile Photo</label>
                <input
                    type="file"
                    className="form-control"
                    name="profilePhoto"
                    accept="image/*"
                    onChange={onFileChange}
                />
                {user.profilePhoto && (
                    <img src={user.profilePhoto} alt="Preview" width="100" className="mt-2" />
                )}
                
            </div>
            <button className="btn btn-primary">Update</button>
        </form>
    </div>
);
}
export default EditUser;