import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ProfileList() {
    const [profiles, setProfiles] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:4000/profiles/")
            .then((res) => setProfiles(res.data.data));
    }, []);
    const deleteProfile = (id) => {
        axios
            .delete(`http://localhost:4000/profiles/delete-profile/${id}`).then(() => setProfiles(profiles.filter((p) => p._id !== id)));
    };
    return (
        <div>
            <h4>Profile List</h4>
            <ul className="list-group">
                {profiles.map((profile) => (
                    <li key={profile._id} className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                            <img src={profile.avatar} alt={profile.bio} width="50" height="50" className="me-2" style={{ objectFit: "cover" }}/>
                        {profile.bio}
                        </div>
                        <Link to={"/edit-profile/" + profile._id} className="btn btn-primary btn-sm me-2">
                            Edit
                        </Link>
                        <button className="btn btn-danger btn-sm" onClick={() => deleteProfile(profile._id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default ProfileList;