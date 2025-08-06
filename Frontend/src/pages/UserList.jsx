import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function UserList() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:4000/users/")
            .then((res) => setUsers(res.data.data));
    }, []);
    const deleteUser = (id) => {
        axios
            .delete(`http://localhost:4000/users/delete-user/${id}`).then(() => setUsers(users.filter((p) => p._id !== id)));
    };
    return (
        <div>
            <h4>User List</h4>
            <ul className="list-group">
                <div className='row'>
                    <h2 className='col-4'>User Name</h2>
                    <h2 className='col-4'>Email</h2>
                    <h2 className='col-4'>Operations</h2>
                </div>
                {users.map((user) => (
                    <li key={user._id} className="list-group-item d-flex justify-content-between align-items-center">
                        <div className='row'>
                            <div className='d-flex col-8'>
                                <img src={user.profilePhoto} alt={user.username} width="50" height="50" className="me-2" style={{ objectFit: "cover", borderRadius:'50%' }}/>
                                <h3 >{user.username}</h3>
                            </div>
                            <h4 className='col-4'>{user.email} </h4>
                        </div>
                        <div className='col-4'>
                            <Link to={"/edit-user/" + user._id} className="btn btn-primary btn-sm me-5">
                                Edit
                            </Link>
                            <Link to={"/profile-details/" + user._id} className='btn btn-success btn-sm me-5'>
                                View
                            </Link>
                            <button className="btn btn-danger btn-sm me-5" onClick={() => deleteUser(user._id)}>
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default UserList;