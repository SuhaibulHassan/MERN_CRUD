import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
function ProfileDetails() {
    const [ user, setUser ] = useState({
        username: "", email: "", profilePhoto: "",
    });
    const [ profile,setProfile ]= useState({
        bio:"",avatar:"",userId:"",
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
        axios.get("http://localhost:4000/Profiles/")
        axios.get("http://localhost:4000/Profiles/get-profile-details/" + id).then((res)=>
        setProfile({
            bio: res.data.data.bio,
            avatar: res.data.data.avatar,
            userId: res.data.data.userId,
        })
    )
}, [id]);
return (
    <div>
        <h1>Profile Details</h1>
        <div className="row">
            <div className="col-4">
                <img src={user.profilePhoto} alt="" width="348px"/>
                <img src={profile.avatar} alt="" width="50" height="50"/>
                <h3 className="mt-4">Name:{user.username}</h3>
            </div>
            <div className="col-2"></div>
            <div className="col-6">
                <h3>User ID:{profile.userId}</h3>
                <h3>Email:{user.email}</h3>
                <h3>Bio:{profile.bio}</h3>
            </div>
        </div>
    </div>
);
}
export default ProfileDetails;