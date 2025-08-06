import React, { useEffect, useState } from "react";
import axios from "axios";
function CreateUser() {
    const [user, setUser] = useState({ username: "", email: "", profilePhoto: "", });
    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const onFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        console.log(reader);
        
        reader.onloadend = () => {
            setUser({ ...user, profilePhoto: reader.result });
            
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };
    const onSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:4000/users/create-user", user)
            .then(() => setUser({ username: "", email: "", profilePhoto: "", }));
    };
    return (
        <div>
            <h4>Create User</h4>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label>User Name</label>
                    <input type="text" className="form-control" name="username" value={user.username} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label>Email</label>
                    <input type="text" className="form-control" name="email" value={user.email} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label>Profile Photo</label>
                    <input type="file" name="profilePhoto" className="form-control" accept="image/*" onChange={onFileChange} />
                    {user.profilePhoto && (
                        <img src={user.profilePhoto} alt="preview" width="100" className="mt-2" />
                    )}
                </div>
                <button className="btn btn-success">Submit</button>
            </form>
        </div>
    );
}
export default CreateUser;